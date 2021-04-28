import * as React from "react";

import { render } from '@testing-library/react';

import  { Offers }  from '..';

describe('<Offers />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Offers  />);

    expect(container);
  });
});
