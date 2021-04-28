import React from 'react';

import { render } from '@testing-library/react';

import { RentmyHouse } from '..';

describe('<RentmyHouse />', () => {
  it('Should render correctly', () => {
    const { container } = render(<RentmyHouse />);
    expect(container);
  });
});
