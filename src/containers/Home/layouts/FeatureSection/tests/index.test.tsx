import React from 'react';

import { render } from '@testing-library/react';

import FeatureSection from '..';

describe('<FeatureSection />', () => {
  it('Should render correctly', () => {
    const { container } = render(<FeatureSection />);
    expect(container);
  });
});
