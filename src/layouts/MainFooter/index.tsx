/**
 *
 * MainFooter
 *
 */
import React, { useState } from "react"
// svg
import { Container, Row, Col } from "react-bootstrap"
import Twitter from "./svg/twitter.svg"
import Youtube from "./svg/youtube.svg"
import Linkdin from "./svg/linkedin.svg"
import Pinterestt from "./svg/pinterest.svg"

// style
import styles from "./styles/styles.module.scss"

export function MainFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <Row className="justify-content-center pb-5">
            <Col lg="12" md="12" className={styles["top-footer"]}>
              <div className={styles["footer-list"]}>
                <h3 className={styles["footer-title"]}>Contact Us</h3>
                <ul>
                  <li>
                    <a href="tel: 651 888 9669">651 888 9669</a>
                  </li>
                  <li>
                    <a href="#">Mon-Fri 8AM-6PM</a>
                  </li>
                </ul>
              </div>
              <div className={`ml-lg-5 pl-lg-5 ${styles["footer-list"]}`}>
                <h3 className={styles["footer-title"]}>Company</h3>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/Jobs">Jobs</a>
                  </li>
                  <li>
                    <a href="/Jobs">Find a gent</a>
                  </li>
                  <li>
                    <a href="/agents">agents</a>
                  </li>
                  <li>
                    <a href="/Partners">Partners</a>
                  </li>
                </ul>
              </div>
              <div className={styles["footer-list"]}>
                <h3 className={styles["footer-title"]}>sell your home</h3>
                <ul>
                  <li>
                    <a href="/about"> Real state offer</a>
                  </li>
                  <li>
                    <a href="/Jobs">In person with Ai</a>
                  </li>
                  <li>
                    <a href="/Jobs">With Agent with Ai</a>
                  </li>
                </ul>
              </div>
              <div className={styles["footer-list"]}>
                <h3 className={styles["footer-title"]}>find a home</h3>
                <ul>
                  <li>
                    <a href="/about"> Buy</a>
                  </li>
                  <li>
                    <a href="/Jobs">Rent</a>
                  </li>
                </ul>
              </div>
              <div className={styles["footer-list"]}>
                <h3 className={styles["footer-title"]}>Resource</h3>
                <ul>
                  <li>
                    <a href="/about">Blog</a>
                  </li>
                  <li>
                    <a href="/Jobs">Buying guide</a>
                  </li>
                  <li>
                    <a href="/Jobs">Selling guide</a>
                  </li>
                  <li>
                    <a href="/Jobs">FAQs</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={styles["bottom-footer"]}>
          <Container>
            <Row className="justify-content-center">
              <Col className="d-flex justify-content-between align-items-center flex-wrap" lg="12">
                <div className={styles.social}>
                  <Twitter />
                  <Youtube />
                  <Linkdin />
                  <Pinterestt />
                </div>
                <ul>
                  <li className="pr-2">
                    <a href="#">Term & privacy</a>
                  </li>
                  <li className="pl-2 pr-2">
                    <a href="#"> Certificates & awards</a>
                  </li>
                  <li className="pl-2">
                    <a href="#">My account</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  )
}
export default MainFooter
