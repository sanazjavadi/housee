import React from 'react';

import { render } from '@testing-library/react';

import { DropMenu } from '..';

describe('<DropMenu />', () => {
  it('Should render correctly', () => {
    const { container } = render(<DropMenu items={[]} />);

    expect(container);
  });
});
