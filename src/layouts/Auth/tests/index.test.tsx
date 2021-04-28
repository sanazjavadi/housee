import * as React from "react";

import { render } from '@testing-library/react';

import  { Auth }  from '..';

describe('<Auth />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Auth  />);

    expect(container);
  });
});
