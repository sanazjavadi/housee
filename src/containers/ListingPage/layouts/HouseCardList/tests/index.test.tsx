import * as React from 'react';

import { render } from '@testing-library/react';

import { HouseCardList } from '..';

describe('<HouseCardList />', () => {
  it('Should render correctly', () => {
    const { container } = render(<HouseCardList />);

    expect(container);
  });
});
