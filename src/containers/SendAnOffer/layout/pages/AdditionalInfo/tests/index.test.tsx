import * as React from "react";

import { render } from '@testing-library/react';

import  { AdditionalInfo }  from '..';

describe('<AdditionalInfo />', () => {
  it('Should render correctly', () => {
    const { container } = render(<AdditionalInfo  />);

    expect(container);
  });
});
