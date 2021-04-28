/**
 *
 * Navbar
 *
 */
import React from 'react';

// InterFaces
import { INavbar } from './Navbar';

// styles
import styles from './styles/Navbar.module.scss';

export const Navbar: React.FunctionComponent<INavbar.IProps> = ({ onMouseLeave, children }) => (
  <nav className={styles.nav} onMouseLeave={() => onMouseLeave()}>
    <ul className={styles.ul}>{children}</ul>
  </nav>
);

export default Navbar;
