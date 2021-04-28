import React, { useState } from "react"

import { Container } from "react-bootstrap"
import Button from "@Components/Button"
import Input from "@Components/Input"
import Notification from "@Components/Notification"
import { IVerification } from "./Verification"

// styles
import styles from "./styles/verification.module.scss"

// assets
import Path from "./svg/path.svg"

export const index: React.FunctionComponent<IVerification.IProps> = ({ changePageHandler }) => {
  const [name, setname] = useState<string>("")
  const [verificationCode, setverificationCode] = useState<string>("")
  const [hasError, sethasError] = useState<boolean>(false)

  const [info, setInfo] = useState<IVerification.IState>({
    login: false,
    title: "Please enter personal information",
    msg: "Please enter a mobile number",
  })

  // Mobile Handler
  const ChangeInfo = () => {
    if (name === "" || name.length === 0) {
      sethasError(true)
      return false
    }
    sethasError(false)
    setInfo({
      login: true,
      title: "Please enter your verification code",
      msg: "Verification code has been sent to",
    })
  }

  // Verification Handler
  const bookTourHandler = () => {
    if (verificationCode === "" || verificationCode.length === 0) {
      sethasError(true)
      return false
    }
    sethasError(false)
    changePageHandler(11)
  }

  // Send to a different number
  const sendNumberAgain = () => {
    sethasError(false)
    setInfo({
      login: false,
      title: "Please enter personal information",
      msg: "Please enter a mobile number",
    })
  }

  return (
    <section className={`${styles.verification} wow fadeInUp`}>
      {hasError ? <Notification status="err">Enter correct code</Notification> : null}
      <Container>
        <div className={`d-flex align-items-center ${styles.hero}`}>
          <Path />
          <h1 className={styles.title}>Request a Tour</h1>
        </div>
        <div className={`d-flex flex-column justif-content-center mt-5 ${styles.wrapper}`}>
          <p className={styles.titlee}>{info.title}</p>
          <span className={styles.desc}>{info.msg}</span>
          <div className="w-100 mt-5 mb-5">
            {!info.login ? (
              <Input
                customStyles={{ textIndent: "10px" }}
                error={hasError ? "Please Try Again" : false}
                value={name}
                change={setname}
                theme="default"
                type="text"
              />
            ) : (
              <Input
                customStyles={{ textIndent: "10px" }}
                value={verificationCode}
                change={setverificationCode}
                theme="default"
                type="text"
                error={hasError ? "Please Try Again" : false}
              />
            )}
          </div>
          {info.login ? (
            <div className={styles.paragraph}>
              <p onClick={() => sendNumberAgain()}>Send to a different number</p>
              <p>Resend code</p>
            </div>
          ) : null}

          <div className="w-100 ">
            {!info.login ? (
              <>
                <Button font="17px" handleClick={() => ChangeInfo()}>
                  Next
                </Button>
                <div className="w-100 mt-2">
                  <Button customStyles={{ maxWidth: "500px" }} theme="outline" handleClick={() => changePageHandler(7)}>
                    Back
                  </Button>
                </div>
              </>
            ) : (
              <Button font="17px" handleClick={() => bookTourHandler()}>
                Book tour
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default index
