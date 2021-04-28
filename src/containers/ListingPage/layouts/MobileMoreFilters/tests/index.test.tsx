import * as React from "react";

import { render } from '@testing-library/react';

import  { MobileMoreFilters }  from '..';

describe('<MobileMoreFilters />', () => {
  it('Should render correctly', () => {
    const { container } = render(<MobileMoreFilters  />);

    expect(container);
  });
});
