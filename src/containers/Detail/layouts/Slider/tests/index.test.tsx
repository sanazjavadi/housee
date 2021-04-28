import * as React from "react";

import { render } from '@testing-library/react';

import  { Slider }  from '..';

describe('<Slider />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Slider  />);

    expect(container);
  });
});
