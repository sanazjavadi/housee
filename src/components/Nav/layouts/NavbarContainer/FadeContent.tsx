/**
 *
 * FadeContent
 *
 */
import React from 'react';

// InterFaces
import { IFadeContent } from './NavbarContainer';

// styles
import styles from './styles/FadeContent.module.scss';

export const FadeContent: React.FunctionComponent<IFadeContent.IProps> = ({ children }) => (
  <div className={styles.FadeContent}>{children}</div>
);

export default FadeContent;
