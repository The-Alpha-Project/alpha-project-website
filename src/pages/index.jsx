import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import Markdown from '../components/Markdown';

export default function IndexPage() {
  return (
    <Container>
      <Row className="py-1">
        <Col>
          <h1>What is The Alpha Project?</h1>
        </Col>
      </Row>
      <Row className="py-1">
        <Col lg={6}>
          <Markdown file="homepage/main" />
        </Col>
        <Col lg={6}>
          {/* Dodgykebaabs video */}
          <div className="ratio ratio-16x9">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ZCpwYZeIBC0&t=29"
              controls
              pip
              width="100%"
              height="100%"
            />
          </div>
        </Col>
      </Row>
      <Row className="py-1">
        <Col>
          <Markdown file="homepage/faqs" />
        </Col>
      </Row>
    </Container>
  );
}
