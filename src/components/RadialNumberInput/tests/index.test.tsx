import * as React from 'react';

import { render } from '@testing-library/react';

import { RadialNumberInput } from '..';

describe('<RadialNumberInput />', () => {
  it('Should render correctly', () => {
    const { container } = render(<RadialNumberInput />);

    expect(container);
  });
});
