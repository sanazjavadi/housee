import * as React from "react";

import { render } from '@testing-library/react';

import  { Nav }  from '..';

describe('<Nav />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Nav  />);

    expect(container);
  });
});
