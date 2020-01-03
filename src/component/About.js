import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
export default function MasterHead() {
  return (
    <div className="container aboutHead">
      <Row>
        <Col sm="12">
          <div>
            <Row>
              <Col md="5">
                <Row>
                  <Col sm="6" md="5">
                    <div className="about-img">
                      <img
                        src={require(`../img/IMG_8995.jpg`)}
                        className="img-fluid rounded b-shadow-a"
                      />
                    </div>
                  </Col>
                  <Col sm="6" md="7">
                    <div className="about-info">
                      <p>
                        <span className="title-s">Name: </span>
                        <span>Viktor Nguyen</span>
                      </p>
                      <p>
                        <span className="title-s">Lokking Position: </span>
                        <span>Web developer</span>
                      </p>
                      <p>
                        <span className="title-s">Email: </span>
                        <span>melodycenter19@gmail.com</span>
                      </p>
                      <p>
                        <span className="title-s">Phone: </span>
                        <span>0912853677</span>
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row className="skill-mf">
                  <Col md="6" sm="12">
                    <p class="title-s ">Programming Skills</p>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Python - Flask</li>
                    <li>Git</li>
                    <li>Postgres</li>
                  </Col>
                  <Col md="6">
                    <p class="title-s ">Soft Skills</p>
                    <li>Teamwork</li>
                    <li>Good communicate</li>
                    <li>Problem Solve</li>
                    <li>Self-learning</li>
                  </Col>
                </Row>
              </Col>
              <Col md="7">
                <div class="about-me pt-4 pt-md-0">
                  <div class="title-box-2">
                    <h5 class="title-left">About me</h5>
                  </div>
                  <p class="lead">
                    <span></span> After 3 years of previous experience as a SEO,
                    I decided to start with Coding with efforts and passion in
                    the next career period of my life.
                  </p>

                  <p></p>
                  <p class="lead">
                    <span></span> As a dynamic, enthusiastic developer with high
                    flexibility to adapt to new working environment, I am
                    seeking for opportunities to improve myself, as well as
                    contribute to the company.
                  </p>
                </div>
              </Col>
              <Row className="w-100">
                <Col md="5">
                  <div class="about-me pt-4 pt-md-0">
                    <div class="title-box-2">
                      <h5 class="title-left">Education history</h5>
                    </div>
                    <div class="skill-mf">
                      <p class="title-s">Full-stack Web Development</p>
                      <span class="title-s">Coder School</span>
                      <p>
                        From September 2019 <span> </span> to December 2019{" "}
                      </p>
                    </div>
                    <p class="lead">
                      Join full-stack Web Development course in Coder School.
                    </p>
                    &nbsp;
                    <p> &nbsp; &nbsp;</p>
                    <p></p>
                  </div>
                  <hr />
                </Col>
              </Row>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
