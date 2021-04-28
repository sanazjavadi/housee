/* eslint-disable no-unreachable */
/**
 *
 * VerticalProductCard
 *
 */
import React from "react"
// InterFaces
import { IVerticalProductCard } from "./VerticalProductCard"

// components
import Button from "../Button"

// styles
import styles from "./styles/VerticalProductCard.module.scss"

// svg
import Close from "./svg/close.svg"
import Wait from "./svg/minus.svg"
import Accept from "./svg/correct.svg"
import Pin from "./svg/pin.svg"
import Home from "./svg/home.svg"
import Beds from "./svg/beds.svg"

export const VerticalProductCard: React.FunctionComponent<IVerticalProductCard.IProps> = ({
  status,
  homeDetails,
  offerPrice,
}) => {
  const productStatus = param => {
    switch (param) {
      case "Not accepted":
        return <Close />
        break
      case "waiting":
        return <Wait />
        break
      case "Accepted":
        return <Accept />
        break
      default:
        return <Wait />
        break
    }
  }

  const statusStyle = param => {
    switch (param) {
      case "Not accepted":
        return {
          color: "#ee7700",
        }
        break

      case "waiting":
        return {
          color: "#707070",
        }
        break

      case "Accepted":
        return {
          color: "#00bbd8",
        }
        break
    }
  }
  const iconStyle = param => {
    switch (param) {
      case "Not accepted":
        return {
          border: "1px solid #ee7700",
        }
        break

      case "waiting":
        return {
          border: "1px solid #707070",
        }
        break

      case "Accepted":
        return {
          border: "1px solid #00bbd8",
        }
        break
    }
  }
  return (
    <div className={styles["vertical-product-card"]}>
      <img
        src="https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612"
        alt=""
      />
      <div className={styles.status} style={statusStyle(status)}>
        <span className={styles.icon} style={iconStyle(status)}>
          {productStatus(status)}
        </span>
        {status}
      </div>

      <div className={styles.details}>
        <div>
          <Pin />
          {homeDetails.address}
        </div>
        <div>
          <Home />
          {homeDetails.sqft}
        </div>
        <div>
          <Beds />
          {homeDetails.beds}
        </div>
      </div>
      <div className={styles["price-offer"]}>
        <span>Agent offer</span>
        <span>{offerPrice.agentOffer}</span>
      </div>
      <div className={styles["price-offer"]}>
        <span>Housee offer</span>
        <span>{offerPrice.houseeOffer}</span>
      </div>
      <div className={styles["price-offer"]} style={{ border: "none" }}>
        <span>Your offer</span>
        <span>{offerPrice.YourOffer}</span>
      </div>
      {status === "Not accepted" ? (
        <Button theme="cardbtn" size="lg">
          Counter Offer
        </Button>
      ) : (
        <div className="invisible">
          <Button theme="cardbtn" size="lg">
            Counter Offer
          </Button>
        </div>
      )}
    </div>
  )
}
export default VerticalProductCard
