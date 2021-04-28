/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/**
 *
 * RadioButton
 *
 */
import React from 'react';

// InterFaces
import { IRadioButton } from './RadioButton';

// styles
import styles from './styles/RadioButton.module.scss';

export const RadioButton: React.FunctionComponent<IRadioButton.IProps> = ({
  inputType,
  hasIcon,
  label,
  value,
  handleChange,
  isChecked,
  name,
}) => (
  <div className={styles[inputType]}>
    <input value={value} type="radio" name={name} checked={isChecked} onChange={handleChange} />
    {hasIcon || null}
    <label htmlFor={name} className={isChecked ? styles.labelactive : styles.label}>
      {label}
    </label>
  </div>
);

export default RadioButton;
