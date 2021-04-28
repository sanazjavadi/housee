/**
 *
 * PastListing
 *
 */
import React, { useState } from "react"

// styles
import { Container, Row, Col } from "react-bootstrap"
import Button from "@Components/Button"
import styles from "./styles/PastListing.module.scss"

export const PastListing = () => {
  const [active, setActive] = useState("buy")
  return (
    <section className={styles.listing}>
      <Container fluid="lg" className="p-lg-0">
        <Row>
          <Col lg="12" className="d-flex justify-content-lg-end justify-content-center ">
            <div className={`d-flex ${styles["group-btn"]}`}>
              <div className={`w-50 ${active === "2018" ? styles["rent-btn-active"] : styles["rent-btn"]}`}>
                <Button theme="outline-gray">2018</Button>
              </div>
              <div className={`w-25 ${active === "rent" ? styles["rent-btn-active"] : styles["rent-btn"]}`}>
                <Button handleClick={() => setActive("rent")} theme="outline-gray">
                  rent
                </Button>
              </div>
              <div className={`w-25 ${active === "buy" ? styles["buy-btn-active"] : styles["buy-btn"]}`}>
                <Button theme="outline-gray" handleClick={() => setActive("buy")}>
                  buy
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="no-gutters">
          <Col lg="4" md="4" sm="4" xs="10" className={`text-center mx-auto mt-2 ${styles.first}`}>
            <p>Date</p>

            <div className="d-flex flex-column align-items-center py-4">
              <span className="pb-3">May 2018</span>
              <span>May 2018</span>
            </div>
          </Col>
          <Col lg="4" md="4" sm="4" xs="10" className={`text-center mx-auto mt-2 ${styles.first}`}>
            <p>Unit address</p>

            <div className="d-flex flex-column align-items-center py-4">
              <span className="pb-3">May 2018</span>
              <span>May 2018</span>
            </div>
          </Col>
          <Col lg="4" md="4" sm="4" xs="10" className={`text-center  mx-auto mt-2 ${styles.first}`}>
            <p>Price</p>

            <div className="d-flex flex-column align-items-center py-4">
              <span className="pb-3">May 2018</span>
              <span>May 2018</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PastListing
