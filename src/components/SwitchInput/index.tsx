/**
 *
 * SwitchInput
 *
 */
import React from 'react';

// InterFaces
import { ISwitchInput } from './SwitchInput';

// styles
import styles from './styles/SwitchInput.module.scss';

export const SwitchInput: React.FunctionComponent<ISwitchInput.IProps> = ({ value }) => (
  <div className={styles.switchInput}>
    <input type="number" placeholder={value} />
  </div>
);

export default SwitchInput;
