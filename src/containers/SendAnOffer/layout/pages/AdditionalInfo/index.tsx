/* eslint-disable import/no-named-as-default-member */
/**
 *
 * AdditionalInfo
 *
 */
import React, { useState } from "react"

// components
import { Container, Row, Col } from "react-bootstrap"
import RadioButton from "@Components/RadioButton"
import Input from "@Components/Input"
import HomeCard from "../../components/HomeCard"

// InterFaces
import { IAdditionalInfo } from "./AdditionalInfo"

// styles
import styles from "./styles/AdditionalInfo.module.scss"

// assets
import Path from "./svg/path.svg"

const AdditionalInfo: React.FunctionComponent<IAdditionalInfo.IProps> = ({ changePageHandler }) => {
  const [showForm, setShowForm] = useState(false)
  const changeComponent = () => {
    if (showForm) {
      changePageHandler(2)
      console.log(2)
    } else {
      setShowForm(true)
      console.log(4)
    }
  }
  const [EmployedOrStudent, setEmployedOrStudent] = useState<string>("Employed")
  return (
    <section className={`${styles.NewOffer} wow fadeInUp`}>
      <div className="d-flex align-items-center mt-5">
        <Path />
        <h1 className={styles.title}>Send an Offer</h1>
      </div>
      <Container fluid="lg" className="px-lg-0">
        <Row className={styles.main}>
          <Col
            lg={{ offset: 2, span: 7 }}
            md="12"
            sm="12"
            xs="12"
            className="d-flex flex-column  align-items-start mt-5 pt-5">
            <span className={styles.employment}>Employment type</span>
            <div className="d-flex align-items-center mt-3">
              <div className={`${styles.radiobutton}`}>
                <RadioButton
                  value="Employed"
                  isChecked={EmployedOrStudent === "Employed"}
                  handleChange={val => setEmployedOrStudent(val.target.value)}
                  name="employmentType"
                  inputType="radioButton"
                  label="Employed"
                />
              </div>
              <div className={`ml-5 ${styles.radiobutton}`}>
                <RadioButton
                  value="Student"
                  isChecked={EmployedOrStudent === "Student"}
                  handleChange={val => setEmployedOrStudent(val.target.value)}
                  name="employmentType"
                  inputType="radioButton"
                  label="Student"
                />
              </div>
              <div className={`ml-5 ${styles.radiobutton}`}>
                <RadioButton
                  value="Unemployed"
                  isChecked={EmployedOrStudent === "Unemployed"}
                  handleChange={val => setEmployedOrStudent(val.target.value)}
                  name="employmentType"
                  inputType="radioButton"
                  label="Unemployed"
                />
              </div>
            </div>
            {showForm && (
              <div className="w-100 wow fadeInLeft">
                <div className="w-75 mt-5 ">
                  <Input type="text" theme="material" label="Company" />
                </div>
                <div className="w-75 mt-5 ">
                  <Input type="text" theme="material" label="Job Title" />
                </div>
                <div className="w-75 mt-5 ">
                  <Input type="text" theme="material" label="Gross Monthly Income" />
                </div>
                <div className="w-75 mt-5 ">
                  <Input type="text" theme="material" label="Duration" />
                </div>
              </div>
            )}
          </Col>
          <Col lg="3" md="4" sm="6" xs="12" className="d-flex flex-column align-items-start mt-5 mb-5 mt-lg-0">
            <HomeCard changePageHandler={changeComponent} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default AdditionalInfo
