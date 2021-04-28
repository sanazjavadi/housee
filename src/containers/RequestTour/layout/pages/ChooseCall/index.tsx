import React, { useState } from "react"

// components
import { Container, Row, Col } from "react-bootstrap"
import Button from "@Components/Button"
import Link from "@Components/Link"
import RadioButton from "@Components/RadioButton"

// interface
import { IChooseCall } from "./ChooseCall"

// styles
import styles from "./styles/ChooseCall.module.scss"

// assets
// import Agent from './svg/aganet.svg';
// import Personsvg from './svg/person.svg';
import Path from "./svg/path.svg"
import FaceTime from "./svg/facetime.svg"
import Google from "./svg/google-duo.svg"
import Skype from "./svg/skype.svg"
import Whatsapp from "./svg/whatsapp.svg"
import Cancel from "./svg/cancel.svg"
import CartImg from "./svg/image.png"
import Home from "./svg/home.svg"
import Pin from "./svg/pin.svg"
import Bed from "./svg/bed.svg"

export const index: React.FunctionComponent<IChooseCall.IProps> = ({ changePageHandler }) => {
  const [personOrAgent, setPersonOrAgent] = useState<string>("Yes")
  return (
    <section className={`${styles.ChooseCall} wow fadeInUp`}>
      <div className="d-flex align-items-center">
        <Path />
        <h1 className={styles.title}>Request a Tour</h1>
      </div>
      <Container fluid="lg" className="px-lg-0">
        <Row>
          <Col lg="9" md="12" sm="12" xs="12">
            <p className={styles["choose-title"]}>Which video chat app would you like to use for the tour?</p>

            <div className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column justify-content-between flex-wrap ">
              <div className={`mt-4 ${styles.radiobutton} wow fadeInLeft`} data-wow-delay="1s">
                <RadioButton name="videoChat" inputType="radioButton" label="FaceTime" hasIcon={<FaceTime />} />
              </div>
              <div className={`mt-4 ${styles.radiobutton} wow fadeInLeft`} data-wow-delay="1.1s">
                <RadioButton name="videoChat" inputType="radioButton" label="Google Duo" hasIcon={<Google />} />
              </div>
              <div className={`mt-4 ${styles.radiobutton} wow fadeInLeft`} data-wow-delay="1.3s">
                <RadioButton name="videoChat" inputType="radioButton" label="Skype" hasIcon={<Skype />} />
              </div>
              <div className={`mt-4 ${styles.radiobutton} wow fadeInLeft`} data-wow-delay="1.5s">
                <RadioButton name="videoChat" inputType="radioButton" label="WhatsApp" hasIcon={<Whatsapp />} />
              </div>
            </div>

            <p className={styles["choose-title"]}>Are you currently working with an agent?</p>
            <div className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column flex-wrap">
              <div className={`mt-4 ${styles.radiobutton} wow fadeInLeft`} data-wow-delay="1.6s">
                <RadioButton
                  inputType="radioButton"
                  name="chooseCall"
                  value="Yes"
                  handleChange={val => setPersonOrAgent(val.target.value)}
                  isChecked={personOrAgent === "Yes"}
                  label="Yes"
                  // hasIcon={<Personsvg />}
                />
              </div>
              <div
                className={`mt-4 ml-lg-5 ml-md-5  ml-sm-5   ${styles.radiobutton} wow fadeInLeft`}
                data-wow-delay="1.8s">
                <RadioButton
                  inputType="radioButton"
                  name="chooseCall"
                  value="No"
                  isChecked={personOrAgent === "No"}
                  handleChange={val => setPersonOrAgent(val.target.value)}
                  label="No"
                  // hasIcon={<Agent />}
                />
              </div>
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
              <div className="w-100 mt-2">
                <Button theme="outline" font="17px" handleClick={() => changePageHandler(0)}>
                  Back
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default index
