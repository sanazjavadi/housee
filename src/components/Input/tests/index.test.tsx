import * as React from 'react';

import { render } from '@testing-library/react';

import Input from '..';

describe('<Input />', () => {
  it('Should render correctly', () => {
    const { container } = render(<Input type="text" />);

    expect(container);
  });
});
