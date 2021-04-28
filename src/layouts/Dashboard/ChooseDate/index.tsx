import React, { useState } from "react"
import DatePicker from "react-datepicker"
import { Container, Row, Col } from "react-bootstrap"
import Button from "@Components/Button"
import Link from "@Components/Link"
import { IChooseDate } from "./ChooseDate"
// styles
import styles from "./styles/Choose-Date.module.scss"

// assets
import Cancel from "./svg/cancel.svg"

export const index: React.FunctionComponent<IChooseDate.IProps> = ({ changePageHandler }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const onChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  return (
    <section className="wow fadeInUp">
      <Container fluid="lg" className="px-lg-0">
        <Row>
          <Col lg="4" md="8" sm="8" xs="12" className="mx-auto">
            <div className={`${styles["calender-title"]} mt-5 `}>Availability date</div>
            <div className={`${styles.calender} mt-1`}>
              <DatePicker
                calendarClassName={styles.customcalender}
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                inline
              />
            </div>
            <div className={styles.nextbtn}>
              <Button handleClick={() => changePageHandler(6)}>Next</Button>
              <div className="w-100 mt-2">
                <Button theme="outline" handleClick={() => changePageHandler(4)}>
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
