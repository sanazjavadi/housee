import React from 'react';

import { render } from '@testing-library/react';

import VisitedSection from '..';

describe('<VisitedSection />', () => {
  it('Should render correctly', () => {
    const { container } = render(<VisitedSection />);

    expect(container);
  });
});
