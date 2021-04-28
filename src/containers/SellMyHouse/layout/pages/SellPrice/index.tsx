/**
 *
 * SellPrice
 *
 */
import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Button from "@Components/Button"
import CustomLineChart from "@Components/OfferLineChart"
import Link from "@Components/Link"
import Input from "@Components/Input"

// InterFaces
import { ISellPrice } from "./SellPrice"

// styles
import styles from "./styles/SellPrice.module.scss"

// assets
import Cancel from "./svg/cancel.svg"
import Path from "./svg/path.svg"

export const SellPrice: React.FunctionComponent<ISellPrice.IProps> = ({ changePageHandler }) => {
  const [price, setPrice] = useState<string>("")

  return (
    <section className={`${styles["rental-listing"]} wow fadeInUp`}>
      <Container className="px-lg-0" fluid="lg">
        <Row>
          <Col>
            <div className={`d-flex align-items-center ${styles.title}`}>
              <Path />
              <span className="ml-2">New Sell Listing</span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="6" md="8" sm="10">
            <p className={styles.grafTitle}>Your Offer</p>
            <div className={styles.graf}>
              <CustomLineChart responsiveSize={[280, 500, 650, 600, 600]} />
            </div>

            <div className={`d-flex mt-5 ${styles.content}`}>
              Housee Intelligence insight:
              <span> 40000$ to 50000$</span>
              <span>Min & max 10-20%</span>
            </div>
            <p className={`d-flex  mt-2 ${styles.content}`}>
              Market price:
              <span> XXX</span>
            </p>
          </Col>

          <Col lg="6" md="4" sm="10" className="d-flex flex-column align-items-end">
            <div className={`d-flex align-items-start justify-content-between mt-5 ${styles.question}`} />
            <div className={styles.nextbtn}>
              <div className="w-100 mb-5">
                <Input change={setPrice} value={price} label="Selling price" type="text" theme="default" />
              </div>
              <Button handleClick={() => changePageHandler(8)}>Select</Button>
              <div className="w-100 mt-2">
                <Button theme="outline" handleClick={() => changePageHandler(6)}>
                  Back
                </Button>
              </div>
              <Link href="/">
                <div className={`${styles.cancel} d-flex align-items-center mt-2`}>
                  <Cancel />
                  <span className="ml-1">Cancel</span>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SellPrice
