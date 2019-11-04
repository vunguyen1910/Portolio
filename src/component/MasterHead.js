import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import ReactTypingEffect from 'react-typing-effect';
export default function MasterHead() { 
  return (
    <header className="masterHead">
      <div className="container h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col lg="10" style={{ alignSelf: "flex-end" }}>
            <h1 className="text-uppercase text-white font-weight-bold">
              Welcome to Viktor's world!
            </h1>
            <hr className="divider my-4"></hr>
          </Col>
          <Col lg="8" style={{ alignSelf: "baseline" }}>
            <p className="description-header">
              <ReactTypingEffect
              text="I'm web developer and what you are seeing is my portolio project"
              speed="50"
              typingDelay="50"
              eraseDelay= "50"/>
            </p>
          </Col>
        </Row>
      </div>
    </header>
  );
}
