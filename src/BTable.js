import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
function SmallExample() {
  return (
    <Table bordered>
      <tbody>
        <tr>
          <td>
            <Row>
              <Col>First column content</Col>
            </Row>
          </td>
          <td>
            <Row>
              <Col>Second column content</Col>
            </Row>

            <Row>
              <Col>Second column content</Col>
            </Row>
            <Row>
              <Col>Second column content</Col>
            </Row>
          </td>
          <td>
            <Row>
              <Col>Second column content</Col>
            </Row>
            <Row>
              <Col>Second column content</Col>
            </Row>
            <Row>
              <Col>Second column content</Col>
            </Row>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SmallExample;
