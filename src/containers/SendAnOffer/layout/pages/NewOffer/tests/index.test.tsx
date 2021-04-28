import * as React from "react";

import { render } from '@testing-library/react';

import  { NewOffer }  from '..';

describe('<NewOffer />', () => {
  it('Should render correctly', () => {
    const { container } = render(<NewOffer  />);

    expect(container);
  });
});
