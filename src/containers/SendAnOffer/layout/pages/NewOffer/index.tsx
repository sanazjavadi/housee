/**
 *
 * NewOffer
 *
 */
import React from "react"

// components
import { Container, Row, Col } from "react-bootstrap"
import SelectInput from "@Components/SelectInput"
import CustomLineChart from "@Components/OfferLineChart"
import HomeCard from "../../components/HomeCard"

// InterFaces
import { INewOffer } from "./NewOffer"

// styles
import styles from "./styles/NewOffer.module.scss"

// assets
import Path from "./svg/path.svg"

export const NewOffer: React.FunctionComponent<INewOffer.IProps> = ({ changePageHandler }) => {
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
    <section className={`${styles.NewOffer} wow fadeInUp mt-5`}>
      <div className="d-flex align-items-center mt-5">
        <Path />
        <h1 className={styles.title}>New offer to Rent the home</h1>
      </div>
      <Container fluid="lg" className="px-lg-0">
        <Row className={styles.main}>
          <Col lg="9" md="12" sm="12" xs="12" className="d-flex flex-column align-items-lg-start align-items-center ">
            <p className={styles["graf-title"]}>Your Offer</p>
            <div className={styles.graf}>
              <CustomLineChart responsiveSize={[280, 500, 650, 600, 600]} />
            </div>

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
            <HomeCard PageId={7} changePageHandler={changePageHandler} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default NewOffer
