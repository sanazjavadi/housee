/**
 *
 * HomeCard
 *
 */
import React from "react"

// components
import Button from "@Components/Button"
import Link from "@Components/Link"

// InterFaces
import { IHomeCard } from "./HomeCard"

// styles
import styles from "./styles/HomeCard.module.scss"

// assets
import Cancel from "./svg/cancel.svg"
import CartImg from "./svg/image.png"
import Home from "./svg/home.svg"
import Pin from "./svg/pin.svg"
import Bed from "./svg/bed.svg"

const HomeCard: React.FunctionComponent<IHomeCard.IProps> = ({ changePageHandler, PageId }) => (
  <div className={styles["vertical-card"]}>
    <Link href="/">
      <div className={`d-flex align-items-center justify-content-start ${styles.cancel}`}>
        <Cancel />
        <span>Cancel</span>
      </div>
    </Link>

    <p>Your home</p>
    <img src={CartImg} alt="" />

    <div className="mt-4 mb-5">
      <div className="mt-2">
        <Pin />
        <span className="pl-3">Location:</span>
      </div>
      <div className="mt-2">
        <Home />

        <span className="pl-3">200 sqft</span>
      </div>
      <div className="mt-2">
        <Bed />

        <span className="pl-3">3 Beds</span>
      </div>
    </div>
    <div className="w-100">
      <Button
        font="17px"
        handleClick={() => {
          changePageHandler(PageId)
        }}>
        Next
      </Button>
    </div>
    <div className="w-100 mt-2">
      <Button
        theme="outline"
        font="17px"
        handleClick={() => {
          changePageHandler(PageId)
        }}>
        Back
      </Button>
    </div>
  </div>
)

export default HomeCard
