/**
 *
 * Navbar
 *
 */
import React from 'react';

// InterFaces
import { INavbarItem } from './Navbar';
// styles
import styles from './styles/NavbarItem.module.scss';

const NavbarItem: React.FunctionComponent<INavbarItem.IProps> = ({ onMouseEnter, title, children }) => (
  <li className={styles.NavbarItemEl} onMouseEnter={() => onMouseEnter()} onFocus={() => onMouseEnter()}>
    <button className={styles.NavbarItemTitle} type="button">
      {title}
    </button>
    <div className={styles.DropdownSlot}>{children}</div>
  </li>
);

export default NavbarItem;
