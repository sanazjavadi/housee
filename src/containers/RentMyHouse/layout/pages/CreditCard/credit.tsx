/**
 *
 * CreditCard
 *
 */
import React from "react"

// components
import RadioButton from "@Components/RadioButton"

// InterFaces
import { ICredit } from "./CreditCard"

// styles
import styles from "./styles/credit.module.scss"

export const Credit: React.FunctionComponent<ICredit.IProps> = ({ cardsInfo }) => (
  <div className={`${styles.credit} d-flex flex-column align-items-start  justify-content-around mt-2`}>
    <div className={styles.radio}>
      <RadioButton name="credit" inputType="radioButton" value="credit" />
    </div>

    <cardsInfo.icon />
    <span className="mt-3">{cardsInfo.number}</span>
    <span className="mt-3 mb-3">{cardsInfo.Expire}</span>
  </div>
)

export default Credit
