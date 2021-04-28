/**
 *
 * RentalApp
 *
 */
import React from "react"

// InterFaces

// components
import { Container, Row, Col } from "react-bootstrap"
import Button from "@Components/Button"
import HomeCard from "../../components/HomeCard"
import { IRentalApp } from "./RentalApp"

// styles
import styles from "./styles/AdditionalInfo.module.scss"

// assets
import Path from "./svg/path.svg"

import Cencell from "./svg/cancell.svg"
import Document from "./svg/document.svg"

export const RentalApp: React.FunctionComponent<IRentalApp.IProps> = ({ changePageHandler }) => (
  <section className={`${styles.NewOffer} wow fadeInUp`}>
    <div className="d-flex align-items-center mt-5">
      <Path />
      <h1 className={styles.title}>Send an Offer</h1>
    </div>
    <Container fluid="lg" className="px-lg-0">
      <Row className={styles.main}>
        <Col
          lg={{ offset: 2, span: 7 }}
          md="12"
          sm="12"
          xs="12"
          className="d-flex flex-column align-items-center justify-content-start mt-5 pt-5">
          <div className="d-flex flex-wrap align-items-center justify-content-start w-100">
            <span className={styles.employment}>Documents (optional)</span>
            <div className="ml-2 mt-2 mt-lg-0 ">
              <Button font="17px" theme="outline">
                Drop files here or browse
              </Button>
            </div>
          </div>

          <div className="d-flex align-items-center flex-wrap justify-content-start mr-auto mt-5 w-75 border p-2">
            <div className={`d-flex align-items-center justify-content-around flex-wrap w-100 ${styles["doc-row"]}`}>
              <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                <Cencell className={styles.cancel} />
                <Document className={styles.doc} />
                <div className="pl-2">
                  <p>Docname_.pdf</p>
                  <p>1.2 mb</p>
                </div>
              </div>
              <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                <Cencell className={styles.cancel} />
                <Document className={styles.doc} />
                <div className="pl-2">
                  <p>Docname_.pdf</p>
                  <p>1.2 mb</p>
                </div>
              </div>
              <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                <Cencell className={styles.cancel} />
                <Document className={styles.doc} />
                <div className="pl-2">
                  <p>Docname_.pdf</p>
                  <p>1.2 mb</p>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6" xs="12" className="d-flex flex-column align-items-start mt-5 mb-5 mt-lg-0">
          <HomeCard PageId={4} changePageHandler={changePageHandler} />
        </Col>
      </Row>
    </Container>
  </section>
)

export default RentalApp
