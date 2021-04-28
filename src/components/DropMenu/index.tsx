/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import React from 'react';
import { NavDropdown } from 'react-bootstrap';

import { IDropDown } from './DropMenu';

// Styles
import styles from './styles/styles.module.scss';

const DropMenu: React.FunctionComponent<IDropDown.IProps> = ({
  ids, items, title, theme,
}) => (
  <NavDropdown
    title={title}
    id={ids}
    rootcloseevent="click"
    bsPrefix={styles[`custom-${theme}-title`]}
  >
    {items.map((link, index) => (
      <NavDropdown.Item
        id={link.title}
        rootcloseevent="click"
        eventKey={`1.${index + 1}`}
        bsPrefix={styles.customDrop}
        key={index}
      >
        {link.title}
      </NavDropdown.Item>
    ))}
  </NavDropdown>
);
export default DropMenu;
