import * as React from "react";

import { render } from '@testing-library/react';

import  { InputSlider }  from '..';

describe('<InputSlider />', () => {
  it('Should render correctly', () => {
    const { container } = render(<InputSlider  />);

    expect(container);
  });
});
