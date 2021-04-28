/**
 *
 * NewOffer
 *
 */
import React from "react"

// components
import { Container, Row, Col } from "react-bootstrap"
import Button from "@Components/Button"
import SelectInput from "@Components/SelectInput"
import Link from "@Components/Link"
// InterFaces
import { INewOffer } from "./NewOffer"

// styles
import styles from "./styles/NewOffer.module.scss"

// assets
import Cancel from "./svg/cancel.svg"
import CartImg from "./svg/image.png"
import Home from "./svg/home.svg"
import Pin from "./svg/pin.svg"
import Bed from "./svg/bed.svg"

const NewOffer: React.FunctionComponent<INewOffer.IProps> = ({ changePageHandler }) => {
  const offerItems = [
    {
      cost: "206,000$",
      status: false,
    },
    {
      cost: "207,000$",
      status: false,
    },
    {
      cost: "208,000$",
      status: true,
    },
    {
      cost: "209,000$",
      status: false,
    },
    {
      cost: "210,000$",
      status: false,
    },
  ]
  return (
    <section className={`${styles.NewOffer} wow fadeInUp`}>
      <Container fluid="lg" className="px-lg-0">
        <Row className={styles.main}>
          <Col lg="9" md="12" sm="12" xs="12" className="d-flex flex-column align-items-lg-start align-items-center ">
            <p className={styles["graf-title"]}>Your Offer</p>
            <div className={styles.graf} />

            <div className={styles.content}>
              <p>Housee Intelligence insight: 40000 to 50000</p>
              <span>Market price: XXX</span>
              <span className="ml-4">Market price: XXX</span>
            </div>

            <div className={`mb-5 ${styles["select-wrapper"]}`}>
              <p className={`ml-4 ${styles["graf-title"]}`}>Your Offer</p>
              <SelectInput offerItems={offerItems} />
            </div>
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="d-flex flex-column align-items-start mt-5 mb-5 mt-lg-0">
            <div className={styles["vertical-card"]}>
              <Link href="/">
                <div className={`d-flex align-items-center justify-content-start ${styles.cancel}`}>
                  <Cancel />
                  <span>Cancel</span>
                </div>
              </Link>

              <p>Your home</p>
              <img src={CartImg} alt="" />

              <div className="mt-4 mb-5">
                <div className="mt-2">
                  <Pin />
                  <span className="pl-3">Location:</span>
                </div>
                <div className="mt-2">
                  <Home />

                  <span className="pl-3">200 sqft</span>
                </div>
                <div className="mt-2">
                  <Bed />

                  <span className="pl-3">3 Beds</span>
                </div>
              </div>
              <div className="w-100">
                <Button font="17px" handleClick={() => changePageHandler(2)}>
                  Next
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewOffer
