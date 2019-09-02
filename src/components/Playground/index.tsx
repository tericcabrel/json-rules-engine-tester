import React from 'react';
import { Col, Row } from "reactstrap";

import './playground.scss';

class Playground extends React.Component {
  render() {
    return (
      <Row className="playground">
        <Col>
          <h1>Playground</h1>
        </Col>
      </Row>
    );
  }
}

export default Playground;
