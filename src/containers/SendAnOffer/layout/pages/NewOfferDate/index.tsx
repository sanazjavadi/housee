/**
 *
 * NewOfferDate
 *
 */
import React, { useState } from "react"

// components
import { Container, Row, Col } from "react-bootstrap"
import DatePicker from "react-datepicker"
import RadioButton from "@Components/RadioButton"
import Select from "@Components/Select"
import HomeCard from "../../components/HomeCard"

// InterFaces
import { INewOfferDate } from "./NewOfferDate"

// styles
import styles from "./styles/OfferDate.module.scss"

// assets
import Path from "./svg/path.svg"

export const NewOfferDate: React.FunctionComponent<INewOfferDate.IProps> = ({ changePageHandler }) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const onChange = dates => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  return (
    <section className={`${styles.NewOffer} wow fadeInUp`}>
      <div className="d-flex align-items-center mt-5">
        <Path />
        <h1 className={styles.title}>Send an Offer</h1>
      </div>
      <Container fluid="lg" className="px-lg-0">
        <Row className={styles.main}>
          <Col
            lg={{ offset: 3, span: 4 }}
            md="12"
            sm="12"
            xs="12"
            className="d-flex flex-column align-items-lg-start align-items-center ">
            <div className={`${styles["calender-title"]} mt-5  w-100 `}>Availability date</div>
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
            <div className="d-flex align-items-center mt-4">
              <div className={`${styles.radiobutton}`}>
                <RadioButton value="Employed" name="employmentType" inputType="radioButton" label="Long Tem Rentals" />
              </div>

              <div className={`${styles.radiobutton} ml-5`}>
                <RadioButton value="Employed" name="employmentType" inputType="radioButton" label="Short Tem Rentals" />
              </div>
            </div>

            <div className="w-100 mt-4">
              <Select theme="dd-wrapper-secondary" defaultSelected="monthly" />
            </div>
          </Col>
          <Col lg="5" md="4" sm="6" xs="12" className="d-flex flex-column align-items-end mt-5 mb-5 mt-lg-0">
            <HomeCard PageId={5} changePageHandler={changePageHandler} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default NewOfferDate
