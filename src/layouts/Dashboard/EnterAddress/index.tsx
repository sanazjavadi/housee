/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react"

import { Container, Row, Col } from "react-bootstrap"
import Input from "@Components/Input"
import Select from "@Components/Select"
import Map from "@Components/Map"
import Button from "@Components/Button"
import Link from "@Components/Link"
import { IEnterAddress } from "./EnterAddress"

// styles
import styles from "./styles/EnterAddress.module.scss"

// assets
import Pin from "./svg/pin.svg"
import Cancel from "./svg/cancel.svg"

export const index: React.FunctionComponent<IEnterAddress.IProps> = ({ changePageHandler }) => {
  const [data, setdata] = useState<IEnterAddress.IState>({
    streetAddress: "",
    unitNumber: "",
    postalCode: "",
    city: null,
    province: null,
  })

  return (
    <section className="wow fadeInUp">
      <Container fluid="lg" className="px-lg-0 mb-5">
        <Row>
          <Col lg="6" md="6" sm="6" xs="10" className="mx-auto">
            <form className="d-flex flex-column mt-5">
              <div className={styles["input-form"]}>
                <label htmlFor="Street Address">Street Address</label>
                <Input
                  customStyles={{ textIndent: "10px" }}
                  change={v => setdata({ ...data, streetAddress: v })}
                  value={data.streetAddress}
                  theme="default"
                  type="text"
                  id="Street Address"
                />
              </div>

              <div className={styles["input-form"]}>
                <label htmlFor="Street Address">Unit number (Optional)</label>
                {data.unitNumber}
                <Input
                  customStyles={{ textIndent: "10px" }}
                  change={v => setdata({ ...data, unitNumber: v })}
                  value={data.unitNumber}
                  theme="default"
                  type="text"
                  id="Unit number"
                />
              </div>
              <div className={styles["input-form"]}>
                <label htmlFor="Street Address">City</label>
                <Select theme="dd-wrapper-secondary" />
              </div>
              <div className={styles["input-form"]}>
                <label htmlFor="Street Address">province</label>
                <Select theme="dd-wrapper-secondary" />
              </div>
              <div className={styles["input-form"]}>
                <label htmlFor="postal code">postal code</label>
                <Input
                  customStyles={{ textIndent: "10px" }}
                  value={data.postalCode}
                  change={v => setdata({ ...data, postalCode: v })}
                  theme="default"
                  type="text"
                  id="postal code"
                />
              </div>
            </form>
          </Col>

          <Col lg="6" md="6" sm="6" xs="10" className="mx-auto">
            <div className={`${styles.select} mt-5`}>
              <label htmlFor="">Property Type</label>
              <Select theme="dd-wrapper-secondary" />
            </div>
            <div className="mt-5">
              <div className={`d-flex align-items-center  mb-1 ${styles.maptitle}`}>
                <div className={styles.pin}>
                  <Pin />
                </div>

                <span>Add in google maps</span>
              </div>
              <div style={{ height: "250px", width: "100%" }}>
                <Map />
              </div>
            </div>

            <div className={styles.nextbtn}>
              <Button handleClick={() => changePageHandler(2)}>Next</Button>
              <div className="w-100 mt-2">
                <Button theme="outline" handleClick={() => changePageHandler(0)}>
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

export default index
