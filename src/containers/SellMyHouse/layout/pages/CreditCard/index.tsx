/**
 *
 * CreditCard
 *
 */
import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

// components
import Input from "@Components/Input"
import Button from "@Components/Button"
import Link from "@Components/Link"
import Credit from "./credit"
import Modal from "../Modal"

// InterFaces
import { ICreditCard } from "./CreditCard"

// styles
import styles from "./styles/credit.module.scss"

// svg
import PayPal from "./svg/paypal.svg"
import Visa from "./svg/visa.svg"
import MasterCard from "./svg/mastercard.svg"
import Cancel from "./svg/cancel.svg"

export const CreditCard: React.FunctionComponent<ICreditCard.IProps> = () => {
  // credit Cart state
  const PayPalcardsInfo = {
    icon: PayPal,
    number: "myself@me.com",
    Expire: "Added 15-02-2017",
  }
  const VisacardsInfo = {
    icon: Visa,
    number: "****  ****  **** 0817",
    Expire: "Expires 10-19",
  }
  const MasterCardcardsInfo = {
    icon: MasterCard,
    number: "****  ****  **** 0817",
    Expire: "Expires 10-19",
  }

  // show modal
  const [showModal, setShowModel] = useState(false)
  const nextHandler = () => {
    setShowModel(true)
  }

  return (
    <section className="wow fadeInUp">
      <Modal status={showModal} />
      <Container className="px-lg-0" fluid="lg">
        <Row className="justify-content-center mt-2">
          <Col lg="3" md="6" sm="6" xs="10" className="d-flex flex-column justify-content-center align-items-center">
            <Credit cardsInfo={PayPalcardsInfo} />
            <Credit cardsInfo={VisacardsInfo} />
            <Credit cardsInfo={MasterCardcardsInfo} />
          </Col>
          <Col lg="4" md="6" sm="6" xs="10" className="d-flex flex-column mx-auto">
            <p className={styles.title}>Billing address</p>
            <div className="mt-2">
              <Input
                customStyles={{ textIndent: "10px" }}
                theme="default"
                type="text"
                id="Street Address"
                label="Cardholder Name"
              />
            </div>

            <div className="mt-4">
              <Input customStyles={{ textIndent: "10px" }} theme="default" type="text" id="Address" label="Address" />
            </div>
            <div className="mt-4">
              <Input
                customStyles={{ textIndent: "10px" }}
                theme="default"
                type="text"
                id="Unit number"
                label="Unit number"
              />
            </div>
            <div className="mt-4">
              <Input customStyles={{ textIndent: "10px" }} theme="default" type="text" id="City" label="City" />
            </div>
            <div className="mt-4">
              <Input customStyles={{ textIndent: "10px" }} theme="default" type="text" id="province" label="province" />
            </div>
            <div className="mt-4">
              <Input
                customStyles={{ textIndent: "10px" }}
                theme="default"
                type="text"
                id="postal code"
                label="postal code"
              />
            </div>
          </Col>
          <Col lg={{ offset: 1, span: 4 }} md="6" sm="6" xs="10" className="d-flex flex-column align-items-center mt-5">
            <div className="mt-4 w-100">
              <Input theme="default" type="text" id="postal code" placeholder="CARD NUMBER" />
            </div>
            <div className="mt-5 w-100">
              <Input theme="default" type="text" id="postal code" placeholder="CARDHOLDER'S NAME" />
            </div>
            <div className={`${styles.checkbox} w-100 mt-4 d-flex justify-content-start`}>
              <input type="checkbox" name="credit" id="credit" />
              <label htmlFor="credit" className="ml-2">
                Save credit card information
              </label>
            </div>

            <div className="mt-4 d-flex justify-content-start mt-5 pt-5 w-100">
              <Button handleClick={() => nextHandler()}>Send</Button>
            </div>

            <div className={`${styles.backbtn} mt-4 d-flex flex-column justify-content-start w-100`}>
              <Button theme="outline">back</Button>
              <Link href="/">
                <div className="d-flex justify-content-start align-items-center mt-4">
                  <Cancel />
                  <span className={`ml-2 ${styles.cancel}`}>cancel</span>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CreditCard
