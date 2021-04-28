import * as React from "react";

import { render } from '@testing-library/react';

import  { SimilarHomesList }  from '..';

describe('<SimilarHomesList />', () => {
  it('Should render correctly', () => {
    const { container } = render(<SimilarHomesList  />);

    expect(container);
  });
});
