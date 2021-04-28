import * as React from 'react';

import { render } from '@testing-library/react';

import { DetailOccordion } from '..';

describe('<DetailOccordion />', () => {
  it('Should render correctly', () => {
    const { container } = render(<DetailOccordion />);

    expect(container);
  });
});
