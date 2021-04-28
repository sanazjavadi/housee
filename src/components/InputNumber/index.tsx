/**
 *
 * InputNumber
 *
 */
import React from 'react';

// InterFaces
import { IInputNumber } from './InputNumber';
import styles from './styles/InputNumber.module.scss';

export const InputNumber: React.FunctionComponent<IInputNumber.IProps> = ({ value, change }) => (
  <input className={styles.numberInput} onChange={(e) => change(e.target.value)} value={value} type="number" />
);

export default InputNumber;
