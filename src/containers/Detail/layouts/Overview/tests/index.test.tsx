import * as React from 'react';

import { render } from '@testing-library/react';

import { Overview } from '..';

describe('<Overview />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Overview />);

    expect(container);
  });
});
