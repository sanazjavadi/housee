import React, { useState } from "react"

import { Container } from "react-bootstrap"
import Button from "@Components/Button"
import Input from "@Components/Input"
// import Notification from '@Components/Notification';
import { IVerification } from "./Verification"

// styles
import styles from "./styles/verification.module.scss"

// assets
import Path from "./svg/path.svg"

export const index: React.FunctionComponent<IVerification.IProps> = ({ changePageHandler }) => {
  const [name, setname] = useState<string>("")
  const [verificationCode, setverificationCode] = useState<string>("")

  const [info, setInfo] = useState<IVerification.IState>({
    login: false,
    title: "Please enter personal information",
    msg: "Please enter a mobile number",
  })
  const ChangeInfo = () => {
    setInfo({
      login: true,
      title: "Please enter your verification code",
      msg: "Verification code has been sent to",
    })
  }

  return (
    <section className={`${styles.verification} wow fadeInUp`}>
      {/* <Notification status="err">Enter correct code</Notification> */}
      <Container>
        <div className={`d-flex align-items-center ${styles.hero}`}>
          <Path />
          <h1 className={styles.title}>Send an Offer</h1>
        </div>
        <div className={`d-flex flex-column justif-content-center mt-5 ${styles.wrapper}`}>
          <p className={styles.titlee}>{info.title}</p>
          <span className={styles.desc}>{info.msg}</span>
          <div className="w-100 mt-5 mb-5">
            {/* <span>Please try again</span> */}
            {info.login ? (
              <Input value={name} change={setname} theme="default" type="text" label="Verification code" />
            ) : (
              <>
                <div className="w-100">
                  <Input
                    customStyles={{ textIndent: "10px" }}
                    value={verificationCode}
                    change={setverificationCode}
                    theme="default"
                    type="text"
                    label="Full Legal Name"
                  />
                </div>

                <div className="w-100 mt-3">
                  <Input
                    customStyles={{ textIndent: "10px" }}
                    value={verificationCode}
                    change={setverificationCode}
                    theme="default"
                    type="text"
                    label="Phone"
                  />
                </div>
              </>
            )}
          </div>
          {info.login ? (
            <div className={styles.paragraph}>
              <p>Send to a different number</p>
              <p>Resend code</p>
            </div>
          ) : null}

          <div className="w-100 ">
            {!info.login ? (
              <Button font="17px" handleClick={() => ChangeInfo()}>
                Next
              </Button>
            ) : (
              <Button font="17px" handleClick={() => changePageHandler(1)}>
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
