import * as React from "react";

import { render } from '@testing-library/react';

import  { OfferExpand }  from '..';

describe('<OfferExpand />', () => {
  it('Should render correctly', () => {
    const { container } = render(<OfferExpand  />);

    expect(container);
  });
});
