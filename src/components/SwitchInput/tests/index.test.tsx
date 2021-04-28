import * as React from "react";

import { render } from '@testing-library/react';

import  { SwitchInput }  from '..';

describe('<SwitchInput />', () => {
  it('Should render correctly', () => {
    const { container } = render(<SwitchInput  />);

    expect(container);
  });
});
