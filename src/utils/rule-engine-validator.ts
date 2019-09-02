// @ts-ignore
import { Engine } from 'json-rules-engine';
import { RuleEngineResult } from "./types";

class RuleEngineValidator {
  private static queries: object[];

  public static isValidQuery(query: string): boolean {
    try {
      const queryArray: string[] = query.split(';');
      const queries: object[] = [];

      queryArray.forEach((q: string) => {
        queries.push(JSON.parse(q.trim()));
      });

      RuleEngineValidator.queries = queries;

      return true;
    } catch (e) {
      RuleEngineValidator.queries = [];
      return false;
    }
  }

  public static async validateFact(rule: object, facts: object): Promise<boolean> {
    let engine = new Engine();
    engine.addRule(rule);

    try {
      const result = await engine.run(facts);

      return result.events.length > 0;
    } catch (e) {
      throw Error(e);
    }
  }

  public static async validate(rule: object): Promise<RuleEngineResult[]> {
    const results: RuleEngineResult[] = [];

    for (const query of RuleEngineValidator.queries) {
      const result = await RuleEngineValidator.validateFact(rule, query);

      results.push({
        fact: RuleEngineValidator.sanitize(query),
        isValid: result
      });
    }

    return results;
  }

  private static sanitize(query: {[key: string]: any }): string {
    if (query.hasOwnProperty('success-events')) {
      delete query['success-events'];
    }

    return JSON.stringify(query);
  }
}

export default RuleEngineValidator;
