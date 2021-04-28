import * as React from 'react';

import { render } from '@testing-library/react';

import { Detailtabs } from '..';

describe('<Detailtabs />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Detailtabs />);

    expect(container);
  });
});
