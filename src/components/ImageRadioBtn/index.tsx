/**
 *
 * ImageRadioBtn
 *
 */
import React, { useState } from 'react';
import ClassNames from 'classnames';
// components
import RadioButton from '@Components/RadioButton';

// InterFaces

import { IImageRadioBtn } from './ImageRadioBtn';

// styles
import styles from './styles/ImgaeRadio.module.scss';

const ImageRadioBtn: React.FunctionComponent<IImageRadioBtn.IProps> = ({
  Image,
  handleClick,
  active,
  inputName,
  imageId,
}) => {
  const classes = ClassNames(styles['image-radio'], { active });
  // const [beCheck, setbeCheck] = useState(false);

  const handlerClick = () => {
    // setbeCheck(true);
    handleClick(imageId);
  };

  return (
    <div className={classes} style={{ backgroundImage: `url("${Image}")` }} onClick={() => handlerClick()}>
      <div className={styles['radio-btn']}>
        <RadioButton name={inputName} inputType="radioButton" />
      </div>
    </div>
  );
};

export default ImageRadioBtn;
