import React from "react"

import { Container } from "react-bootstrap"
import Button from "@Components/Button"
import { useRouter } from "next/router"
import { IShowTour } from "./showTour"

// assets
import Location from "./svg/location.svg"
import Date from "./svg/date.svg"
import End from "./svg/end.svg"
import Start from "./svg/start.svg"
import Home from "./svg/home.svg"
import avatar from "./svg/avatar.png"
import Path from "./svg/path.svg"
import ShowTour from "./svg/showtour.svg"

// styles
import styles from "./styles/Showtour.module.scss"

export const index: React.FunctionComponent<IShowTour.IProps> = () => {
  const router = useRouter()

  return (
    <section className={`${styles.showtour} wow fadeInUp pt-4`}>
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <div className={styles.herosvg}>
          <Path className={styles.path} />
          <ShowTour />
        </div>
        <p className={`mt-4 mb-4 ${styles.videoTour}`}>ideo tour via skype</p>
        <div className={`d-flex align-items-center justify-content-center ${styles.avatar}`}>
          <img src={avatar} alt="" />
          <div>
            <p>Grace Thornton</p>
            <p>Latest tenant</p>
          </div>
        </div>
        <span className={styles.job}>Professional Real Estate Agent</span>
      </div>
      <Container fluid="xl" className="px-lg-0">
        <div className={`d-flex  justify-content-between ${styles.datesection}`}>
          <span className="d-flex align-items-center wow fadeInUp" data-wow-delay="0.9s">
            <Location />
            <p>Location:</p>
          </span>
          <span className="d-flex align-items-center wow fadeInUp" data-wow-delay="1.1s">
            <Home />
            <p> Homes:</p>
          </span>
          <span className="d-flex align-items-center wow fadeInUp" data-wow-delay="1.3s">
            <Date />
            <p> Date:</p>
          </span>
          <span className="d-flex align-items-center wow fadeInUp" data-wow-delay="1.5s">
            <Start />
            <p>Start:</p>
          </span>
          <span className="d-flex align-items-center wow fadeInUp" data-wow-delay="1.7s">
            <End />
            <p> End:</p>
          </span>
        </div>
      </Container>
      <Container fluid="lg" className="px-lg-0 mt-5 mb-5">
        <div className={`d-flex justify-content-center align-items-center ${styles.btngruop}`}>
          <div className={`d-flex flex-column align-items-center  ${styles.btndash}`}>
            <Button theme="outline" font="17px">
              Dashboard
            </Button>
            <div className="d-flex flex-column align-items-center w-100  mt-3">
              <Button theme="outline" font="17px" handleClick={() => router.push("/listing")}>
                Back to Listing Page
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default index
