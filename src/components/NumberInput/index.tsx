/**
 *
 * NumberInput
 *
 */
import React from 'react';

// InterFaces
import { INumberInput } from './NumberInput';

// styles
import styles from './styles/NumberInput.module.scss';

export const NumberInput: React.FunctionComponent<INumberInput.IProps> = () => (
  <div className={styles.InputNumber}>
    <span>-</span>
    <button type="button" className={styles.number}>
      5
    </button>
    <span>+</span>
  </div>
);

NumberInput.propTypes = {};

export default NumberInput;
