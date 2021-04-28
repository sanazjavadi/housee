/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/indent */
/**
 *
 * PaymentCalculate
 *
 */
import React from "react"

// styles
import { Container, Row, Col } from "react-bootstrap"
import InputNumber from "@Components/NumberInput"
import styles from "./styles/payment.module.scss"

import Money from "./svg/money.svg"

export const PaymentCalculate = () => (
  <section className={styles["payment-calculate"]}>
    <Container fluid="lg" className="p-0">
      <div className="d-flex align-items-center">
        <span className={styles.title}>Mortgage amortization:</span>
        <div className={styles["input-number"]}>
          <InputNumber />
        </div>
      </div>

      <Row className="no-gutters">
        <Col
          lg="6"
          md="6"
          sm="10"
          xs="12"
          className={`d-flex flex-column align-items-center justify-content-center mx-auto ${styles["left-custom-tabel"]}`}>
          <div className={`w-100 ${styles["table-title"]}`}>Home price</div>
          <div className={`w-100 py-2 ${styles["table-price"]}`}>$703400</div>
          <div className={`w-100 ${styles.slidertd}`}>
            <input
              type="range"
              className={styles.slider}
              onChange={e => {
                const { value } = e.target
                e.target.style.background = `linear-gradient(to right, #00bbd8 0%, #00bbd8 ${value}%, #fff ${value}%, #c7c7c7 0%)`
              }}
            />
          </div>
          <div className={`w-100 ${styles["left-tabel"]}`}>
            <div className="d-flex justify-content-between">
              <span className={styles.titleTable}>Principal and Interest</span>
              <span className={styles.price}>$1,337</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className={styles.titleTable}>Property Taxes</span>
              <span className={styles.price}>$122</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className={styles.titleTable}>Monthly Expenses</span>
              <span className={styles.price}>$143</span>
            </div>
          </div>
        </Col>
        <Col
          lg="6"
          md="6"
          sm="10"
          xs="12"
          className={`d-flex flex-column align-items-center justify-content-cener mx-auto ${styles["right-custom-tabel"]}`}>
          <div className="d-flex align-items-center w-100">
            <div className={`${styles["table-title"]}`}>Down payment</div>
            <div className={styles.percantage} />
          </div>

          <div className={`d-flex align-items-center w-100 justify-content-between ${styles["table-price"]}`}>
            <div className={`py-2 ${styles.number}`}>$500400</div>
            <div className={`py-2 ${styles.percantage}`}>%60</div>
          </div>

          <div className={`w-100 ${styles.slidertd}`}>
            <input
              type="range"
              className={styles.slider}
              onChange={e => {
                const { value } = e.target
                e.target.style.background = `linear-gradient(to right, #00bbd8 0%, #00bbd8 ${value}%, #fff ${value}%, #c7c7c7 0%)`
              }}
            />
          </div>
          <div className={`w-100 ${styles["left-tabel"]}`}>
            <div className="d-flex justify-content-between">
              <span className={styles.titleTable}>Maintenance Fee</span>
              <span className={styles.price}>$356</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className={styles.titleTable}>Homeowners Insurance</span>
              <span className={styles.price}>$317</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className={styles.titleTable}>Mortgage interest rate</span>
              <span className={styles.price}>12%</span>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg="5" md="6" sm="7" xs="9">
          <div className={styles["money-svg"]}>
            <Money />
          </div>
          <div className={styles.fairprice}>
            <span className={styles.icon} />
            <span>Fair Price</span>
          </div>
          <span className={`${styles.total} d-flex flex-column`}>
            <div className="d-flex justify-content-between align-items-center px-lg-5 px-3">
              <span>Purchase Price: </span>
              <span>$1,749,000</span>
            </div>
            <div className="d-flex justify-content-between align-items-center px-lg-5 px-3">
              <span>Mortgage Amount: </span>
              <span>$386,860</span>
            </div>
            <div className="d-flex justify-content-between align-items-center px-lg-5 px-3 pb-2">
              <span>Total mountly payment: </span>
              <span>$386,860</span>
            </div>
          </span>
        </Col>
      </Row>
    </Container>
  </section>
)

export default PaymentCalculate
