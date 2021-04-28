/**
 *
 * RadialNumberInput
 *
 */
import React, { useState } from "react"

// InterFaces
import { IRadialNumberInput } from "./RadialNumberInput"

// styles
import styles from "./styles/NumberInput.module.scss"

// svg
import Minuss from "./svg/minus.svg"
import Pluss from "./svg/plus.svg"

export const RadialNumberInput: React.FunctionComponent<IRadialNumberInput.IProps> = ({
  max = 100,
  onChange,
  currentCount,
  halfCount,
  size,
}) => {
  const [number, setNumber] = useState(currentCount || 0)
  const num = halfCount ? 0.5 : 1

  const IncrementItem = () => {
    // if (!onChange) return false;
    setNumber(prevState => {
      if (prevState > max) return prevState
      onChange(prevState + num)
      return prevState + num
    })
  }
  const DecreaseItem = () => {
    // if (!onChange) return false;
    setNumber(prevState => {
      if (prevState === 0) return prevState
      onChange(prevState - num)
      return prevState - num
    })
  }
  return (
    <div className={styles.InputNumber}>
      <button type="button" onClick={DecreaseItem} className={styles[size]}>
        <Minuss />
      </button>
      <div className={`${styles.number} ${styles[`number-${size}`]}`}>{number}</div>
      <button type="button" onClick={IncrementItem} className={styles[size]}>
        <Pluss />
      </button>
    </div>
  )
}

export default RadialNumberInput
