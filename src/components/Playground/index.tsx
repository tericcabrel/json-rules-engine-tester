import React from 'react';
import {Button, Col, Input, Row} from "reactstrap";

import Editor from "../Editor";

import './playground.scss';

interface IPlaygroundProps {

}

interface IPlaygroundState {
  content: object,
  query: string
}

const rule = {
  conditions: {
    any: [{
      all: [{
        fact: 'gameDuration',
        operator: 'equal',
        value: 40
      }, {
        fact: 'personalFoulCount',
        operator: 'greaterThanInclusive',
        value: 5
      }]
    }, {
      all: [{
        fact: 'gameDuration',
        operator: 'equal',
        value: 48
      }, {
        fact: 'personalFoulCount',
        operator: 'greaterThanInclusive',
        value: 6
      }]
    }]
  },
  event: {  // define the event to fire when the conditions evaluate truthy
    type: 'fouledOut',
    params: {
      message: 'Player has fouled out!'
    }
  }
};

let facts = {
  personalFoulCount: 6,
  gameDuration: 40
};

class Playground extends React.Component<IPlaygroundProps, IPlaygroundState> {
  constructor(props: IPlaygroundProps) {
    super(props);
    this.state = {
      content: rule,
      query: JSON.stringify(facts)
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleEditorChange(e: object) {
    this.setState({ content: e });
  }

  handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ query: e.currentTarget.value });
  }

  handleValidateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { content, query } = this.state;

    console.log(content);
    console.log(query);
  };

  render() {
    const { content, query } = this.state;

    return (
      <Row className="playground">
        <Col md={{ size: 6, offset: 1}}>
          <h5>Build you JSON rule here </h5>
          <Editor
            content={content}
            onChange={this.handleEditorChange}
          />
          <div className="d-flex justify-content-center mt-3">
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
                placeholder="Enter the query here"
              />
            </Col>
            <Col className="result pl-0 pr-0">
              <h5 className="text-center">Result</h5>
              <div className="result-content">

              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Playground;
