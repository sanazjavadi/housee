import React from 'react';

import { render } from '@testing-library/react';

import { ComissionSection } from '..';

describe('<ComissionSection />', () => {
  it('Should render correctly', () => {
    const { container } = render(<ComissionSection t={jest.fn()} />);

    expect(container);
  });
});
