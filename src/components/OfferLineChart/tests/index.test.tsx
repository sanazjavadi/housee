import * as React from 'react';

import { render } from '@testing-library/react';

import { CustomLineChart } from '..';

describe('<LineChart />', () => {
  it('Should render correctly CustomLineChart', () => {
    const { container } = render(<CustomLineChart />);

    expect(container);
  });
});
