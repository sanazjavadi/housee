/**
 *
 * NavbarContainer
 *
 */
import React from 'react';
import { Flipped } from 'react-flip-toolkit';
import FadeContents from './FadeContent';
// InterFaces
import { INavbarContainer } from './NavbarContainer';

// styles
import styles from './styles/NavbarContainer.module.scss';

export const NavbarContainer: React.FunctionComponent<INavbarContainer.IProps> = ({ children }) => {
  const [currentDropdown, prevDropdown] = Children.toArray(children);
  return (
    <div className={styles.DropdownRoot}>
      <Flipped flipId="dropdown-caret">
        <div className={styles.caret} />
      </Flipped>
      <Flipped flipId="dropdown">
        <div className={styles.DropdownBackground}>
          <Flipped inverseFlipId="dropdown">
            <div className={styles.InvertedDiv}>
              <div className={styles.AltBackground} />
              <FadeContents />
            </div>
          </Flipped>

          <Flipped inverseFlipId="dropdown" scale>
            <div style={{ position: 'absolute' }}>{prevDropdown && <FadeContents>{prevDropdown}</FadeContents>}</div>
          </Flipped>
        </div>
      </Flipped>
    </div>
  );
};

export default NavbarContainer;
