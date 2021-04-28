/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Input
 *
 */
import React from "react"

// InterFaces
import { IInput } from "./Input"

// styles
import styles from "./styles/input.module.scss"

// eslint-disable-next-line object-curly-newline
const Input: React.FunctionComponent<IInput.IProps> = ({
  type,
  id,
  label,
  hasIcon,
  theme,
  placeholder,
  change,
  value,
  error,
  customStyles,
  ...props
}) => {
  const haveLabel = theme === "default" && label
  const style = { ...customStyles }
  return (
    <>
      <div className={styles[`input-${theme}-container`]}>
        {error && <span className={styles.txterror}>{error}</span>}
        {haveLabel ? (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        ) : null}
        <input
          onChange={e => change(e.target.value)}
          {...props}
          value={value}
          className={`${styles.input} ${error && styles.error}`}
          id={id}
          type={type}
          style={style}
          required
          placeholder={placeholder}
        />
        {theme === "material" ? (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        ) : null}

        {hasIcon ? <span className={styles.inputIcon}>{hasIcon}</span> : null}
      </div>
    </>
  )
}

// default props
Input.defaultProps = {
  theme: "material",
}

export default Input
