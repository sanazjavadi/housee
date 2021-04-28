/**
 *
 * AddressInfo
 *
 */
import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// components
import Input from "@Components/Input"
import Select from "@Components/Select"
import RadioButton from "@Components/RadioButton"
import Homecard from "../../components/HomeCard"

// InterFaces
import { IAddressInfo } from "./AddressInfo"

// styles
import styles from "./styles/AddressInfo.module.scss"

const AddressInfo: React.FunctionComponent<IAddressInfo.IProps> = ({ changePageHandler }) => (
  <section className="mt-5 wow fadeInUp">
    <Container fluid="lg" className="px-lg-0 mt-5">
      <Row className="justify-content-center">
        <Col lg="4" md="5" sm="7">
          <p className={styles.title}>Add rental history</p>

          <div className="w-100">
            <label htmlFor="" className={styles.label}>
              City
            </label>
            <Select theme="dd-wrapper-secondary" defaultSelected=" " />
          </div>

          <div className="w-100 mt-5 pt-4">
            <Input theme="material" label="Address" type="text" />
          </div>
          <div className="w-100 mt-5 pt-4">
            <Input theme="material" label="Monthly Rent (Optional)" type="text" />
          </div>

          <div className="d-flex justify-content-between mt-5 pt-4">
            <p className={styles.radioTitle}>I have pets</p>
            <div className="d-flex ">
              <div>
                <RadioButton inputType="yesNoButton" label="Yes" />
              </div>
              <div className="ml-5">
                <RadioButton inputType="yesNoButton" label="No" />
              </div>
            </div>
          </div>
        </Col>
        <Col lg={{ offset: 1, span: 4 }} md={{ offset: 1, span: 5 }} sm="7" className="mt-5 mt-lg-0 mt-md-0">
          <p className={styles.formHeader}>I have people that I can use as my reference</p>
          <div className="w-100 mt-5">
            <Input theme="material" label="Full Legal Name" type="text" />
          </div>
          <div className="w-100 mt-5 pt-4">
            <Input theme="material" label="Phone" type="text" />
          </div>
          <div className="w-100 mt-5 pt-4">
            <Input theme="material" label="Enter your email" type="text" />
          </div>
          <div className="w-100 mt-5 pt-4">
            <Input theme="material" label="Relationship to the Applicant" type="text" />
          </div>

          <p className={`mt-4 ${styles.refrence}`}>Add another refrence</p>
        </Col>
        <Col
          lg="3"
          md="11"
          sm="7"
          xs="12"
          className="d-flex flex-column align-items-start align-items-lg-end mt-5 mb-5 mt-lg-0">
          <Homecard PageId={3} changePageHandler={changePageHandler} />
        </Col>
      </Row>
    </Container>
  </section>
)

export default AddressInfo
