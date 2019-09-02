import React from 'react';
import {Alert, Button, Col, Input, Row} from "reactstrap";

import * as constants from "../../utils/constants";
import { RuleEngineResult } from "../../utils/types";
import RuleEngineValidator from "../../utils/rule-engine-validator";

import Editor from "../Editor";
import EngineResult from "../EngineResult";

import './playground.scss';

interface IPlaygroundProps {

}

interface IPlaygroundState {
  content: object,
  query: string,
  error: boolean,
  ruleEngineResults: RuleEngineResult[]
}

class Playground extends React.Component<IPlaygroundProps, IPlaygroundState> {
  constructor(props: IPlaygroundProps) {
    super(props);
    this.state = {
      content: constants.rule,
      query: constants.facts,
      error: false,
      ruleEngineResults: []
    };

    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleValidateClick = this.handleValidateClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleEditorChange(e: object) {
    this.setState({ content: e });
  }

  handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ query: e.currentTarget.value });
  }

  async handleValidateClick(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    e.preventDefault();

    const { content, query } = this.state;

    console.log(query);

    const isValidQuery: boolean = RuleEngineValidator.isValidQuery(query);
    if (isValidQuery) {
      const results = await RuleEngineValidator.validate(content);

      this.setState({ ruleEngineResults: results });
    } else {
      this.setState({ error: true });
    }
  };

  handleResetClick(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    this.setState({ error: false, ruleEngineResults: [], query: '', content: {} });
  }

  render() {
    const { content, query, error, ruleEngineResults } = this.state;

    return (
      <Row className="playground">
        {
          error &&
          <Col md={{ size: 10, offset: 1}} className="mt-3">
            <Alert color="danger">
              Error: Make sure your query is well formed
            </Alert>
          </Col>
        }
        <Col md={{ size: 6, offset: 1}}>
          <h5>Build you JSON rule here </h5>
          <Editor
            content={content}
            onChange={this.handleEditorChange}
          />
          <div className="d-flex justify-content-between mt-3">
            <Button
              type="button"
              color="danger"
              className="w-25"
              onClick={this.handleResetClick}
            >
              Reset
            </Button>
            <Button
              type="button"
              color="primary"
              className="w-25"
              onClick={this.handleValidateClick}
            >
              Validate
            </Button>
          </div>
        </Col>
        <Col md={4}>
          <Row>
            <Col md="12" className="query pl-0 pr-0">
              <h5>Enter the fact here:</h5>
              <Input
                type="textarea"
                onChange={(e) => this.handleQueryChange(e)}
                value={query}
                className="input-query"
                placeholder="You can provide many facts but just be sure to separate them with a comma (;)"
              />
            </Col>
            <Col className="result pl-0 pr-0">
              <h5 className="text-center">Result</h5>
              <div className="result-content">
                {
                  ruleEngineResults.length > 0 &&
                  <EngineResult
                    data={ruleEngineResults}
                  />
                }
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Playground;
