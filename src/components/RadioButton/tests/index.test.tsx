import * as React from "react";

import { render } from '@testing-library/react';

import  { RadioButton }  from '..';

describe('<RadioButton />', () => {
  it('Should render correctly', () => {
    const { container } = render(<RadioButton  />);

    expect(container);
  });
});
