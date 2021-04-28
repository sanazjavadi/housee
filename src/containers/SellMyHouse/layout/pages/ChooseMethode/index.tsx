/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react"

import { Container, Row, Col } from "react-bootstrap"
import RadioButton from "@Components/RadioButton"
import Button from "@Components/Button"
import Notification from "@Components/Notification"
import Input from "@Components/Input"

// Interfaces
import { IChooseMethode } from "./ChooseMethode"

// styles
import styles from "./styles/ChooseMethode.module.scss"

// assets
import Personsvg from "./svg/person.svg"
import Agent from "./svg/aganet.svg"

export const index: React.FunctionComponent<IChooseMethode.IProps> = ({ changePageHandler }) => {
  const [personOrAgent, setpersonOrAgent] = useState<string>("with-person")
  const [title, setTitle] = useState("")
  const [hasError, sethasError] = useState(false)

  // next handler
  const nextHandler = () => {
    if (title === "") {
      sethasError(true)
      return false
    }
    sethasError(false)
    changePageHandler(1)
  }

  return (
    <section className="wow fadeInUp" data-wow-duration="1s">
      {hasError ? <Notification status="err">Enter correct code</Notification> : null}
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col lg="5">
            <span className={`d-flex justify-content-center ${styles.header}`}>
              How would you like to list your property?
            </span>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="4" className={`d-flex flex-column align-items-start ${styles.radioButton}`}>
            <div className={styles["radio-button"]}>
              <RadioButton
                handleChange={val => setpersonOrAgent(val.target.value)}
                isChecked={personOrAgent === "with-person"}
                value="with-person"
                inputType="radioButton"
                name="chooseMethod"
                label="List it yourself"
                hasIcon={<Personsvg />}
              />
            </div>
            <div className={`mt-4 ${styles["radio-button"]}`}>
              <RadioButton
                handleChange={val => setpersonOrAgent(val.target.value)}
                isChecked={personOrAgent === "with-agent"}
                value="with-agent"
                inputType="radioButton"
                name="chooseMethod"
                label="Through an Housee Agent"
                hasIcon={<Agent />}
              />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="5" className={`d-flex flex-column ${styles["text-area"]}`}>
            <span>Title</span>
            <label htmlFor="title">Max 50 Characters</label>
            <Input
              customStyles={{ textIndent: "10px" }}
              value={title}
              change={e => setTitle(e.value)}
              theme="default"
              type="text"
              id="title"
            />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center pt-3">
          <Col sm="5">
            <div className={`d-flex flex-column justify-content-end ${styles.nextBtn}`}>
              <Button handleClick={() => nextHandler()}>Next</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default index
