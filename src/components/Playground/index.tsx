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

class Playground extends React.Component<IPlaygroundProps, IPlaygroundState> {
  constructor(props: IPlaygroundProps) {
    super(props);
    this.state = {
      content: {},
      query: ''
    };
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleEditorChange(e: any) {
    console.log(e);
  }

  handleQueryChange(e: React.ChangeEvent) {
    console.log(e);
  }

  render() {
    const { content, query } = this.state;

    return (
      <Row className="playground">
        <Col md={{ size: 6, offset: 2}}>
          <h5>Build you JSON rule here </h5>
          <Editor
            content={content}
            onChange={this.handleEditorChange}
          />
          <div className="d-flex justify-content-center mt-3">
            <Button type="button" color="primary" className="w-25">
              Validate
            </Button>
          </div>
        </Col>
        <Col md={2}>
          <Row>
            <Col md="12" className="query pl-0 pr-0">
              <h5>Enter the fact here:</h5>
              <Input
                type="textarea"
                onChange={this.handleQueryChange}
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
