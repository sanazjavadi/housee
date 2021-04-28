import * as React from 'react';

import { render } from '@testing-library/react';

import { MobileFilterMenu } from '..';

describe('<MobileFilterMenu />', () => {
  it('Should render correctly', () => {
    const { container } = render(<MobileFilterMenu />);

    expect(container);
  });
});
