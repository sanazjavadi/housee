/**
 *
 * Modal
 *
 */
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
// InterFaces
import { Modal as OfferModal } from "react-bootstrap"
import Button from "@Components/Button"
import { IModal } from "./Modal"

// component

// styles
import styles from "./styles/Modal.module.scss"

// assets
import Close from "./svg/close.svg"
import Boysvg from "./svg/boy.svg"

export const Modal: React.FunctionComponent<IModal.IProps> = ({ status }) => {
  const [show, setShow] = useState(status)

  useEffect(() => {
    setShow(status)
  }, [status])

  const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true);
  const router = useRouter()
  const NavigateRoute = e => {
    e.preventDefault()
    router.push("/")
  }
  return (
    <OfferModal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      dialogClassName={styles["modal-80w"]}>
      <OfferModal.Body>
        <section className="d-flex align-items-center justify-content-center h-100 mt-5 mb-5">
          <div className={styles.close}>
            <Close onClick={() => handleClose} />
          </div>

          <div className="d-flex flex-column align-items-center  justify-content-center w-50 h-100 mt-5 mb-5 pt-5 pb-5">
            <span className={styles.title}>Pending Approval</span>
            <p className={`px-5 w-75 text-center ${styles.content}`}>Your listing will be live shortly </p>
            <div className="mb-4 w-100 text-center">
              <Button theme="outline" handleClick={e => NavigateRoute(e)}>
                Dashboard
              </Button>
            </div>
          </div>
        </section>
      </OfferModal.Body>
    </OfferModal>
  )
}

export default Modal
