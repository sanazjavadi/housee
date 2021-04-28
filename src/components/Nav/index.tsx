/**
 *
 * Nav
 *
 */
import React, { useState } from 'react';
import { Flipper } from 'react-flip-toolkit';
import Navbar from './layouts/Navbar';
import NavbarItem from './layouts/Navbar/NavbarItem';
import DropdownContainer from './layouts/NavbarContainer';

// InterFaces
import { INav } from './Nav';

export const Nav: React.FunctionComponent<INav.IProps> = () => {
  const navbarConfig = [
    { title: 'Products', dropdown: ['hi', 'hi', 'hi', 'hi'] },
    { title: 'Developers', dropdown: ['hi', 'hi', 'hi', 'hi'] },
    { title: 'Company', dropdown: ['hi', 'hi', 'hi', 'hi'] },
  ];

  const [activeIndices, setActiveIndices] = useState([]);

  const [animatingOut, setAnimationOut] = useState<any>(false);

  const resetDropdownState = (e) => {
    setActiveIndices({
      activeIndices: typeof e === 'number' ? [i] : [],
      animatingOut: false,
    });
  };
  const onMouseEnter = () => {
    resetDropdownState(i);

    // setState((prevState) => ({
    //   activeIndices: prevState.activeIndices.concat(i),
    //   animatingOut: false,
    // }));
  };

  const onMouseLeave = (e) => {
    setAnimationOut(true);
    // animatingOutTimeout = setTimeout(resetDropdownState);
  };
  const [CurrentDropdown, setCurrentDropdown] = useState(null);
  const [PrevDropdown, setPrevDropdown] = useState(null);

  const currentIndex = activeIndices[activeIndices.length - 1];
  const prevIndex = activeIndices.length > 1 && activeIndices[activeIndices.length - 2];
  if (typeof currentIndex === 'number') {
    setCurrentDropdown(navbarConfig[currentIndex].dropdown);
  }
  if (typeof prevIndex === 'number') {
    setPrevDropdown(navbarConfig[prevIndex].dropdown);
  }
  return (
    <Flipper flipKey={currentIndex} spring="noWobble">
      <Navbar onMouseLeave={onMouseLeave}>
        {navbarConfig.map((n, index) => (
          <NavbarItem key={n.title} title={n.title} index={index} onMouseEnter={() => onMouseEnter()}>
            {/* {currentIndex === index && (
              <DropdownContainer>
                <CurrentDropdown />
                {PrevDropdown && <PrevDropdown />}
              </DropdownContainer>
            )} */}
          </NavbarItem>
        ))}
      </Navbar>
    </Flipper>
  );
};

export default Nav;
