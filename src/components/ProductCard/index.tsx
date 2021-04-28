/* eslint-disable max-len */
/**
 *
 * ProductCard
 *
 */
import React, { useState } from "react"
import ClassNames from "classnames"
// InterFaces
import { IProductCard } from "./ProductCard"

// svg
import Beds from "./svg/beds.svg"
import Fav from "./svg/favorite.svg"
import Reload from "./svg/reload.svg"
import Sqft from "./svg/sqft.svg"
import Bath from "./svg/bath.svg"
// styles
import styles from "./styles/ProductCard.module.scss"

export const ProductCard: React.FunctionComponent<IProductCard.IProps> = ({ cardDetails, size, onDoubleClick }) => {
  const [favorite, setFavorite] = useState(false)
  const favClass = ClassNames(favorite ? styles.favorite : styles.unfavorite)

  return (
    <div className={`${styles[`product-card-${size}`]}`} onDoubleClick={e => onDoubleClick(e)}>
      {/* favorite product */}
      <Fav className={favClass} onClick={() => setFavorite(!favorite)} />
      {/* favorite product */}

      {/* card overlay */}
      <div className={styles["card-overlay"]}>
        <div className={styles["overlay-details"]}>
          <h3 className="overlay-title">Excellent</h3>
          <p className="overlay-text">
            We analyzed similar vehicles in your area and calculated that this vehicle is priced lower than the average
            making it a Great Price.
          </p>
          <p className="overlay-price">$9,407 BELOW M</p>
        </div>
      </div>

      {/* card overlay */}
      <img src={cardDetails.img} alt="" />

      <div className={styles["product-desc"]}>
        <div className="d-flex justify-content-between">
          <p className={styles.city}>{cardDetails.city}</p>
          <span className={styles.price}>{`$ ${cardDetails.price} `}</span>
        </div>
        <p className={styles.address}>{cardDetails.address}</p>

        <div className={`d-flex justify-content-between align-items-center ${styles["bottom-desc"]}`}>
          <div className={`d-flex ${styles["product-feature"]}`}>
            <span>
              <Sqft />
              {`${cardDetails.sqft} sqft`}
            </span>
            <span>
              <Beds />
              {cardDetails.bed}
              bd
            </span>
            <span>
              <Bath />
              {cardDetails.bt}
              bt
            </span>
          </div>
          <div className={styles["product-date"]}>
            <Reload className="mr-1" />
            <span>3 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
