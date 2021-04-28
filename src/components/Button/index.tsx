/* eslint-disable react/jsx-closing-bracket-location */
import * as React from 'react';
import ClassNames from 'classnames';

// InterFaces
import { IButton } from './Button';

// styles
import styles from './styles/button.module.scss';

// eslint-disable-next-line max-len
// eslint-disable-next-line prettier/prettier
export const Button: React.FunctionComponent<IButton.IProps> = ({
  theme,
  children,
  hasIcon,
  disabled,
  size,
  handleClick,
  height,
  font,
  fontweight,
  border,
  borderRadius,
  fontFamily,
  customStyles,
  active,
  ...props
}) => {
  const classes = ClassNames('btn', `${styles[theme]}`, ` ${styles[size]}`, `${styles.button}`, {
    [styles.active]: active || false,
  });
  const localStyle = {
    fontSize: font,
    height,
    fontWeight: fontweight,
    border,
    borderRadius,
    fontFamily,
  };

  const style = { ...localStyle, ...customStyles };
  return (
    <>
      <button
        {...props}
        type="button"
        style={style}
        className={classes}
        disabled={disabled}
        onClick={(e) => handleClick(e)}>
        <span className={styles.btnIcon}>{hasIcon || null}</span>
        {children}
      </button>
    </>
  );
};

// default props
Button.defaultProps = {
  theme: 'primary',
  size: 'lg',
};

export default Button;
