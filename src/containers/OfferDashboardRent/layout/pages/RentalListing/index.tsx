/**
 *
 * RentalListing
 *
 */
import React, { useState } from "react"

// InterFaces
import { Container, Row, Col } from "react-bootstrap"
import Input from "@Components/Input"
import RadioButton from "@Components/RadioButton"
import Button from "@Components/Button"
import Link from "@Components/Link"
import { IRentalListing } from "./RentalListing"
// styles
import styles from "./styles/RentalListing.module.scss"

// assets
import Cancel from "./svg/cancel.svg"

const RentalListing: React.FunctionComponent<IRentalListing.IProps> = ({ changePageHandler }) => {
  const [yesOrNo, setYesOrNo] = useState<string>("yes")
  return (
    <section className={`${styles["rental-listing"]} wow fadeInUp`}>
      <Container className="px-lg-0" fluid="lg">
        <Row className="justify-content-center">
          <Col lg="6" md="8" sm="10">
            <div className={styles.graf} />

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
            <form className={styles.form}>
              <div className={styles["input-form"]}>
                {/* <label htmlFor="Street Address">Monthly Rent</label> */}
                <Input theme="default" type="text" label="Monthly Rent" id="Street Address" />
              </div>

              <div className={`mt-5 ${styles["input-form"]}`}>
                <label htmlFor="Street Address">Security Deposit</label>
                <Input theme="default" type="text" id="Security Deposit" />
              </div>
            </form>
            <div className={`d-flex align-items-start justify-content-between mt-5 ${styles.question}`}>
              <p>First and last required</p>
              <div>
                <RadioButton
                  inputType="yesNoButton"
                  label="Yes"
                  name="rental"
                  value="yes"
                  isChecked={yesOrNo === "yes"}
                  handleChange={val => setYesOrNo(val.target.value)}
                />
              </div>
              <div>
                <RadioButton
                  inputType="yesNoButton"
                  label="No"
                  name="rental"
                  value="no"
                  isChecked={yesOrNo === "no"}
                  handleChange={val => setYesOrNo(val.target.value)}
                />
              </div>
            </div>
            <div className={styles.nextbtn}>
              <Button handleClick={() => changePageHandler(1)}>Select</Button>
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
export default RentalListing
