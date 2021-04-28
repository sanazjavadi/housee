/**
 *
 * OpenHouse
 *
 */
import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import DatePicker from "react-datepicker"

// components
import Button from "@Components/Button"
import RadioButton from "@Components/RadioButton"
import Link from "@Components/Link"

// styles
import styles from "./styles/OpenHouse.module.scss"

// InterFaces
import { IOpenHouse } from "./OpenHouse"

// assets
import Cancel from "./svg/cancel.svg"

export const OpenHouse: React.FunctionComponent<IOpenHouse.IProps> = ({ changePageHandler }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const onChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  const [startAmOrPm, setStartAmOrPm] = useState<string>("startAM")
  const [endAmOrPm, setEndAmOrPm] = useState<string>("endAM")
  const [startOrEnd, setstartOrEnd] = useState<string>("start")
  return (
    <section className={`${styles["open-house-section"]} wow fadeInUp`}>
      <Container fluid="lg" className="px-lg-0">
        <Row>
          <Col lg="6" md="7" sm="10" xs="12" className="d-flex flex-column align-items-start">
            <p className={styles.title}>Open house</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="6" md="7" sm="10" className="d-flex flex-column align-items-center">
            <div className={`${styles.calender} d-flex flex-wrap align-items-center w-100`}>
              <div className={styles["calender-left"]}>
                <p className={styles["calender-title"]}>Choose Date</p>
                <div className={styles["calender-container"]}>
                  <DatePicker
                    calendarClassName={styles.customcalender}
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                  />
                </div>
              </div>

              <div
                className={`${styles.time} d-flex flex-lg-column flex-md-column
               flex-sm-column flex-row justify-content-lg-center justify-content-md-center justify-content-around ml-3`}>
                <div className={`mt-3 mt-lg-0 mt-md-0 ${styles["start-time"]}`}>
                  <p>Strat Time</p>
                  <div
                    className={`d-flex flex-column align-items-center justify-content-center  ${styles["time-container"]}`}>
                    <div className="w-100 h-50 d-flex align-items-center justify-content-center">
                      <p>06 : 00</p>
                    </div>
                    <div className="d-flex w-100 h-50 ">
                      <span
                        tabIndex={-1}
                        onKeyDown={() => setStartAmOrPm("startAm")}
                        className={startAmOrPm === "startAm" ? styles.selected : null}
                        onClick={() => setStartAmOrPm("startAm")}>
                        AM
                      </span>
                      <span
                        onKeyDown={() => setStartAmOrPm("startPm")}
                        tabIndex={-1}
                        className={startAmOrPm === "startPm" ? styles.selected : null}
                        onClick={() => setStartAmOrPm("startPm")}>
                        PM
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`mt-3 ${styles["end-time"]}`}>
                  <p>End Time</p>
                  <div
                    className={`d-flex flex-column align-items-center justify-content-center  ${styles["time-container"]}`}>
                    <div className="w-100 h-50 d-flex align-items-center justify-content-center">
                      <p>06 : 00</p>
                    </div>
                    <div className="d-flex w-100 h-50 ">
                      <span
                        onKeyDown={() => setEndAmOrPm("endAm")}
                        tabIndex={-1}
                        className={endAmOrPm === "endAm" ? styles.selected : null}
                        onClick={() => setEndAmOrPm("endAm")}>
                        AM
                      </span>
                      <span
                        onKeyDown={() => setEndAmOrPm("endPm")}
                        tabIndex={-1}
                        className={endAmOrPm === "endPm" ? styles.selected : null}
                        onClick={() => setEndAmOrPm("endPm")}>
                        PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 mt-3">
              <Button theme="outline">OK</Button>
            </div>
          </Col>

          <Col
            lg={{ offset: 1, span: 5 }}
            md="7"
            sm="10"
            xs="12"
            className="mt-5 d-flex flex-column
        align-items-end justify-content-between">
            <div className={styles["time-desc"]}>
              <p className={styles.title}>March</p>
              <div className={`d-flex align-items-center ${styles["chat-calender"]}`}>
                <div
                  className={`d-flex flex-column align-items-start  justify-content-center w-50 ${styles["start-time-review"]}`}>
                  <span className="pl-4">10 - Sunday</span>
                  <div className="d-flex align-items-center w-100 mt-2">
                    <span className={styles["radio-span"]}>
                      <RadioButton
                        name="openhouse"
                        value="start"
                        isChecked={startOrEnd === "start"}
                        handleChange={val => setstartOrEnd(val.target.value)}
                        inputType="radioButton"
                        label="Start Time:"
                      />
                    </span>
                    <span className="ml-2"> 12:00 pm </span>
                  </div>

                  <div className="d-flex align-items-center mt-2 pl-4">
                    <span>End Time:</span>
                    <span className="ml-2"> 13:00 pm </span>
                  </div>
                </div>
                <div
                  className={`d-flex flex-column align-items-start  justify-content-center w-50 ${styles["end-time-review"]}`}>
                  <span className="pl-4">10 - Sunday</span>
                  <div className="d-flex align-items-center w-100 mt-2">
                    <span className={styles["radio-span"]}>
                      <RadioButton
                        name="openhouse"
                        value="end"
                        isChecked={startOrEnd === "end"}
                        handleChange={val => setstartOrEnd(val.target.value)}
                        inputType="radioButton"
                        label="Start Time:"
                      />
                    </span>
                    <span className="ml-2"> 12:00 pm </span>
                  </div>

                  <div className="d-flex align-items-center mt-2 pl-4">
                    <span>End Time:</span>
                    <span className="ml-2"> 13:00 pm </span>
                  </div>
                </div>
              </div>
            </div>

            <Col lg="8" md="8" sm="12" xs="12">
              <div className={styles.nextbtn}>
                <Button handleClick={() => changePageHandler(7)}>Next</Button>
                <div className="w-100 mt-2">
                  <Button theme="outline" handleClick={() => changePageHandler(5)}>
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
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default OpenHouse
