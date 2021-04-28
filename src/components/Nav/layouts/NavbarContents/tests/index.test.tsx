import * as React from "react";

import { render } from '@testing-library/react';

import  { NavbarContents }  from '..';

describe('<NavbarContents />', () => {
  it('Should render correctly', () => {
    const { container } = render(<NavbarContents  />);

    expect(container);
  });
});
