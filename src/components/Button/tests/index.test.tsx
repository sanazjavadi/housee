import * as React from "react";

import { render } from '@testing-library/react';

import  Button  from '..';

describe('<Button />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Button  />);

    expect(container);
  });
});
