import * as React from "react";

import { render } from '@testing-library/react';

import  { NavbarContainer }  from '..';

describe('<NavbarContainer />', () => {
  it('Should render correctly', () => {
    const { container } = render(<NavbarContainer  />);

    expect(container);
  });
});
