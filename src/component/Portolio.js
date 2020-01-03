import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "react-bootstrap";
export default function Portolio() {
  return (
    <div className="container">
      <Row>
        <Col sm="12">
          <div className="title-box text-center">
            <h3 className="title-a">Portolio</h3>
            <div className="line-mf"></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <div className="work-box">
            <img src={require("../img/Portolio1.PNG")} className="img-project"></img>
            <div className="work-content">
              <Row>
                <Col sm="8">
                  <h2 style={{ fontSize: "1.2rem" }}>The Twitter</h2>
                  <div class="w-more">
                    <Form>
                        <a href="https://github.com/TKQCuong/SIERRA-Twitter-Group3-" className="btn">Github</a>
                        <a href="https://sleepy-poitras-8e1c30.netlify.com/" className="btn">Demo</a>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="work-box">
            <img src={require('../img/IMDB.png')} className="img-project"/>
            <div className="work-content">
              <Row>
                <Col sm="8">
                  <h2 style={{ fontSize: "1.2rem" }}>The IMDB</h2>
                  <div class="w-more">
                    <Form>
                        <a href="https://github.com/vunguyen1910/movies" className="btn">Github</a>
                        <a href="https://romantic-bose-30bbcc.netlify.com/" className="btn">Demo</a>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <div className="work-box">
            <img src={require("../img/learning music.png")} className="img-project"></img>
            <div className="work-content">
              <Row>
                <Col sm="8">
                  <h2 style={{ fontSize: "1.2rem" }}>Learning Music Online</h2>
                  <div class="w-more">
                    <Form>
                        <a href="https://github.com/vunguyen1910/client-learning" className="btn">Github</a>
                        <a href="https://learning-music-online.netlify.com" className="btn">Demo</a>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
