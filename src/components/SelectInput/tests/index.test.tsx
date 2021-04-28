import * as React from "react";

import { render } from '@testing-library/react';

import  { SelectInput }  from '..';

describe('<SelectInput />', () => {
  it('Should render correctly', () => {
    const { container } = render(<SelectInput  />);

    expect(container);
  });
});
