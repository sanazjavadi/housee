import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from '@utils/configure-store';

import { SellMyHouse } from '..';

describe('<SellMyHouse />', () => {
  
  let store;

  beforeAll(() => {
    store = configureStore({});
  });

  it('Should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <SellMyHouse  />
      </Provider>
    );
    expect(container);
  });
});
