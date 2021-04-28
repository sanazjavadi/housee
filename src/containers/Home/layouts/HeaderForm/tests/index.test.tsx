import * as React from "react";

import { render } from '@testing-library/react';

import  { HeaderForm }  from '..';

describe('<HeaderForm />', () => {
  it('Should render correctly', () => {
    const { container } = render(<HeaderForm  />);

    expect(container);
  });
});
