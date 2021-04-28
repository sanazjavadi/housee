/* eslint-disable object-curly-newline */
/**
 *
 * ChooseDate2
 *
 */
import React, { useState } from "react"
import { useRouter } from "next/router"

// components
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap"
import Btn from "@Components/Button"
import Link from "@Components/Link"
import RadioButton from "@Components/RadioButton"
import DatePicker from "react-datepicker"
import CustomeCalender from "@Components/CutomeCalender"

// styles
import styles from "./styles/ChooseDate.module.scss"

// InterFaces
import { IChooseDate } from "./ChooseDate"

// assets
import Agentt from "./svg/aganet.svg"
import Person from "./svg/person.svg"
import Location from "./svg/location.svg"
import Date from "./svg/date.svg"
import End from "./svg/end.svg"
import Start from "./svg/start.svg"
import Home from "./svg/home.svg"
import Cancelsvg from "./svg/cancel.svg"

const ChooseDate: React.FunctionComponent<IChooseDate.IProps> = ({ changePageHandler }) => {
  const [selectedDate, setselectedDate] = useState()
  const onChange = dates => {
    console.log(dates)
    setselectedDate(dates)
  }
  const [personOrAgent, setPersonOrAgent] = useState<string>("in-person")
  const router = useRouter()
  const [amorpm, setAmorpm] = useState("am")
  return (
    <section className={`${styles.ChooseDate} wow fadeInUp`}>
      <Container className="px-lg-0" fluid="lg">
        <Row className="justify-content-center">
          <Col lg="12" md="10">
            <div className={styles.tour}>
              <p>New tour</p>

              <p>Would the method you choose?</p>

              <div className={styles.radiobtn}>
                <div className="mr-5">
                  <RadioButton
                    name="chatMethod"
                    inputType="radioButton"
                    value="in-person"
                    handleChange={val => setPersonOrAgent(val.target.value)}
                    isChecked={personOrAgent === "in-person"}
                    label="Tour in person"
                    hasIcon={<Person />}
                  />
                </div>

                <div className={styles["tour-chat"]}>
                  <RadioButton
                    name="chatMethod"
                    value="in-agent"
                    isChecked={personOrAgent === "in-agent"}
                    handleChange={val => setPersonOrAgent(val.target.value)}
                    inputType="radioButton"
                    label="Tour via video chat"
                    hasIcon={<Agentt />}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid="lg" className="px-lg-0">
        <Row className="justify-content-center">
          <Col lg="8" md="10" sm="12" xs="12" className="mt-5">
            <Accordion defaultActiveKey="0">
              <Card bsPrefix={styles["custome-accardion"]}>
                <Accordion.Toggle as={Button} eventKey="0" bsPrefix={styles["card-header"]}>
                  Open house option
                  <div className={styles["arrow-open"]} />
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="px-0">
                    <div className={`${styles.body}`}>
                      <CustomeCalender />
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <div className={`${styles.choosedate} mt-5`}>
              <h3>Choose date</h3>
              <div className={styles.calender}>
                <DatePicker
                  selected={selectedDate}
                  calendarClassName={styles.customcalender}
                  onChange={onChange}
                  inline
                />
              </div>
            </div>
            <div className={`${styles.choosetime} mt-5`}>
              <h3>Choose Time</h3>
              <div
                className={`${styles["time-container"]} d-flex flex-column align-items-center justify-content-center`}>
                <div className={styles.time}> 06 : 00</div>
                <div className={`d-flex  justify-content-center w-100  ${styles.ampm}`}>
                  <div onClick={() => setAmorpm("am")} className={amorpm === "am" && styles.selected}>
                    Am
                  </div>
                  <div onClick={() => setAmorpm("pm")} className={amorpm === "pm" && styles.selected}>
                    Pm
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="5" sm="6" xs="10" className="d-flex flex-column mt-4 mt-md-5 mt-lg-0">
            <div className={`${styles.right} d-flex flex-column mt-5 mt-md-0`}>
              <div className="d-flex justify-content-start align-items-center mb-3  wow fadeInUp" data-wow-delay="1.4s">
                <Location />
                <span>Location: </span>
              </div>

              <div className="d-flex  justify-content-start align-items-center mb-3 wow fadeInUp" data-wow-delay="1.5s">
                <Home />
                <span>Homes : </span>
              </div>

              <div className="d-flex  justify-content-start align-items-center mb-3 wow fadeInUp" data-wow-delay="1.7s">
                <Date />
                <span>Date:</span>
              </div>

              <div className="d-flex justify-content-start align-items-center mb-3 wow fadeInUp" data-wow-delay="1.9s">
                <Start />
                <span>Start:</span>
              </div>

              <div className="d-flex    justify-content-start align-items-center  wow fadeInUp" data-wow-delay="2s">
                <End />
                <span>End: </span>
              </div>
            </div>
            <div className="w-100 mt-5">
              <Btn handleClick={() => changePageHandler(3)} font="17px">
                request a tour
              </Btn>
            </div>
            <div className="w-100 mt-2">
              <Btn handleClick={() => changePageHandler(2)} font="17px" theme="outline">
                Back
              </Btn>
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

export default ChooseDate
