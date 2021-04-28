/**
 *
 * Contract
 *
 */
import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

// InterFaces
import Button from "@Components/Button"
import { IContract } from "./Contract"

// components
import Modal from "../Modal"

// assets
import Cancel from "./svg/cancel.svg"
import Document from "./svg/document.svg"

// styles
import styles from "./styles/Contract.module.scss"

export const Contract: React.FunctionComponent<IContract.IProps> = () => {
  const [showModal, setshowModal] = useState(false)

  return (
    <section className="wow fadeInUp">
      <Modal status={showModal} />
      <Container className="px-lg-0" fluid="lg">
        <Row className="mt-5">
          <Col lg="12">
            <p className={styles.title}>Mortgage Pre-Approval Letter</p>

            <div className="d-flex align-items-center flex-wrap justify-content-between w-100 border p-2">
              <div className={`d-flex align-items-center justify-content-between flex-wrap ${styles["doc-row"]}`}>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
              </div>

              <div className={styles.btn}>
                <Button handleClick={() => setshowModal(true)} theme="outline">
                  Upload new
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="12">
            <p className={styles.title}>Home Sale Documents</p>

            <div className="d-flex align-items-center flex-wrap justify-content-between w-100 border p-2">
              <div className={`d-flex align-items-center justify-content-between flex-wrap ${styles["doc-row"]}`}>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
              </div>

              <div className={styles.btn}>
                <Button theme="outline">Upload new</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="7">
            <p className={styles.title}>Mortgage Pre-Approval Letter</p>

            <div className="d-flex align-items-center flex-wrap justify-content-between w-100 border p-2">
              <div className={`d-flex align-items-center justify-content-around flex-wrap ${styles["doc-row"]}`}>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
                <div className={`${styles.document} pl-2 d-flex align-items-center justify-content-start`}>
                  <Cancel className={styles.cancel} />
                  <Document className={styles.doc} />
                  <div className="pl-2">
                    <p>Docname_.pdf</p>
                    <p>1.2 mb</p>
                  </div>
                </div>
              </div>

              <div className={styles.btn}>
                <Button theme="outline">Upload new</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contract
