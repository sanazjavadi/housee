/* eslint-disable jsx-a11y/alt-text */
/**
 *
 * VisitedSection
 *
 */
import React from "react"
// styles
import { Container, Row, Col } from "react-bootstrap"
import styles from "./styles.module.scss"

export const VisitedSection: React.FunctionComponent = () => (
  <>
    <section className={styles["most-visited"]}>
      <Container className="p-lg-0">
        <Row className="justify-content-center">
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center">
            <div className={styles.circle} />
            <h4 className={styles.title}>The most visited</h4>
          </Col>
        </Row>
      </Container>
      <Container className="p-lg-0">
        <Row className="justify-content-center">
          <Col
            data-wow-delay="0.4s"
            lg="4"
            md="6"
            sm="6"
            xs="6"
            className="d-flex justify-content-center wow fadeInLeft">
            <div className={styles["gallery-card"]}>
              <img src="https://images.unsplash.com/photo-1499886887649-ea679189e7b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
              <div className={styles.caption}>
                <span className={styles["caption-province"]}>Los Angeles</span>
                <span className={styles["caption-city"]}>Macgregor Ave</span>
              </div>
            </div>
          </Col>
          <Col
            data-wow-delay="0.6s"
            lg="4"
            md="6"
            sm="6"
            xs="6"
            className="d-flex justify-content-center wow fadeInLeft">
            <div className={styles["gallery-card"]}>
              <img src="https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              <div className={styles.caption}>
                <span className={styles["caption-province"]}>Los Angeles</span>
                <span className={styles["caption-city"]}>Macgregor Ave</span>
              </div>
            </div>
          </Col>
          <Col
            data-wow-delay="0.8s"
            lg="4"
            md="6"
            sm="6"
            xs="6"
            className="d-flex justify-content-center wow fadeInLeft">
            <div className={styles["gallery-card"]}>
              <img src="https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
              <div className={styles.caption}>
                <span className={styles["caption-province"]}>Los Angeles</span>
                <span className={styles["caption-city"]}>Macgregor Ave</span>
              </div>
            </div>
          </Col>

          <Col data-wow-delay="1s" lg="4" md="6" sm="6" xs="6" className="d-flex justify-content-center wow fadeInLeft">
            <div className={styles["gallery-card"]}>
              <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              <div className={styles.caption}>
                <span className={styles["caption-province"]}>Los Angeles</span>
                <span className={styles["caption-city"]}>Macgregor Ave</span>
              </div>
            </div>
          </Col>
          <Col
            data-wow-delay="1.2s"
            lg="8"
            md="6"
            sm="6"
            xs="6"
            className="d-flex justify-content-center wow fadeInLeft">
            <div className={styles["gallery-card"]}>
              <img src="https://images.unsplash.com/photo-1493339633411-8eb533b18cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" />
              <div className={styles.caption}>
                <span className={styles["caption-province"]}>Los Angeles</span>
                <span className={styles["caption-city"]}>Macgregor Ave</span>
              </div>
            </div>
          </Col>
          <Col
            data-wow-delay="1.4s"
            lg="8"
            md="6"
            sm="6"
            xs="6"
            className="d-flex justify-content-center wow fadeInLeft">
            <div className={styles["gallery-card"]}>
              <img src="https://images.unsplash.com/photo-1601723825606-4fbae6a5bb84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1544&q=80" />
              <div className={styles.caption}>
                <span className={styles["caption-province"]}>Los Angeles</span>
                <span className={styles["caption-city"]}>Macgregor Ave</span>
              </div>
            </div>
          </Col>
          <Col
            data-wow-delay="1.6s"
            lg="4"
            md="6"
            sm="6"
            xs="6"
            className="d-flex justify-content-center wow fadeInLeft">
            <div className={styles["gallery-card"]}>
              <img src="https://images.unsplash.com/photo-1488750059241-ed3ad4563245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
              <div className={styles.caption}>
                <span className={styles["caption-province"]}>Los Angeles</span>
                <span className={styles["caption-city"]}>Macgregor Ave</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
)

export default VisitedSection
