import * as React from 'react';

import { render } from '@testing-library/react';

import { NumberInput } from '..';

describe('<NumberInput />', () => {
  it('Should render correctly', () => {
    const { container } = render(<NumberInput />);

    expect(container);
  });
});
