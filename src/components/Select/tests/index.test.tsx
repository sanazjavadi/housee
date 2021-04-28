import * as React from 'react';

import { render } from '@testing-library/react';

import Select from '../index';

describe('<Select />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Select label="some thing label" />);

    expect(container);
  });
});
