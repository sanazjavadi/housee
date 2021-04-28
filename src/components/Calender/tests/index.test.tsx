import * as React from 'react';

import { render } from '@testing-library/react';

import { Calender } from '..';

describe('<Calender />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Calender />);

    expect(container);
  });
});
