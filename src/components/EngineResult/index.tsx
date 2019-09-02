import React from 'react';
import { RuleEngineResult } from "../../utils/types";

import './engine-result.scss';

interface IRuleEngineResultProps {
  data: RuleEngineResult[]
}

const EngineResult: React.FC<IRuleEngineResultProps> = ({ data }) => {
  return (
    <ul className="rule-engine-result-list">
      {
        data.map((item: RuleEngineResult, index: number) => (
          <li
            key={index}
            className={`${item.isValid ? 'success' : 'error' }`}
          >
            {item.fact}
          </li>
        ))
      }
    </ul>
  )
};

export default EngineResult;
