import React, { useState } from "react"

// components
import { Container, Row, Col } from "react-bootstrap"
import Button from "@Components/Button"
import RadioButton from "@Components/RadioButton"
import Link from "@Components/Link"

// interface
import { IChooseDate } from "./ChooseDate"

// styles
import styles from "./styles/ChooseDate.module.scss"

// assets
import Agent from "./svg/aganet.svg"
import Person from "./svg/person.svg"
import Location from "./svg/location.svg"
import Date from "./svg/date.svg"
import End from "./svg/end.svg"
import Start from "./svg/start.svg"
import Home from "./svg/home.svg"
import Cancelsvg from "./svg/cancel.svg"

export const index: React.FunctionComponent<IChooseDate.IProps> = ({ changePageHandler }) => {
  const [personOrAgent, setPersonOrAgent] = useState<string>("Virtual")
  return (
    <section className={`${styles.ChooseDate} wow fadeInUp`}>
      <Container fluid="lg" className="px-lg-0">
        <Row className="mt-lg-5">
          <Col lg="7" sm="6" xs="12" className="d-flex justify-content-lg-center">
            <div className={styles.tour}>
              <p>New tour</p>

              <p>How would you like to conduct the tour?</p>

              <div className={styles.radiobtn}>
                <RadioButton
                  inputType="radioButton"
                  name="chooseDate"
                  value="Virtual"
                  handleChange={val => setPersonOrAgent(val.target.value)}
                  isChecked={personOrAgent === "Virtual"}
                  label="Virtual"
                  hasIcon={<Person />}
                />

                <div className="mt-4">
                  <RadioButton
                    inputType="radioButton"
                    name="chooseDate"
                    value="In Person"
                    isChecked={personOrAgent === "In Person"}
                    handleChange={val => setPersonOrAgent(val.target.value)}
                    label="In Person"
                    hasIcon={<Agent />}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" sm="6" xs="12" className="d-flex flex-column my-5 my-lg-0 my-md-0">
            <div className={styles.right}>
              <div className="d-flex justify-content-start align-items-center mb-3  wow fadeInLeft" data-wow-delay="1s">
                <Location />
                <span>Location: </span>
              </div>
              <div
                className="d-flex justify-content-start align-items-center mb-3 wow fadeInLeft"
                data-wow-delay="1.1s">
                <Home />
                <span>Homes : </span>
              </div>
              <div
                className="d-flex justify-content-start align-items-center mb-3 wow fadeInLeft"
                data-wow-delay="1.3s">
                <Date />
                <span>Date: </span>
              </div>
              <div
                className="d-flex justify-content-start align-items-center mb-3 wow fadeInLeft"
                data-wow-delay="1.5s">
                <Start />
                <span>Start: </span>
              </div>
              <div className="d-flex justify-content-start align-items-center wow fadeInLeft" data-wow-delay="1.7s">
                <End />
                <span>End: </span>
              </div>
            </div>
            <div className="w-100 mt-5">
              <Button font="17px" handleClick={() => changePageHandler(1)}>
                Next
              </Button>
            </div>

            <Link href="/">
              <div className={styles.cancel}>
                <Cancelsvg />
                <span>cancel</span>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default index
