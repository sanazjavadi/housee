import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from '@utils/configure-store';

import { SendAnOffer } from '..';

describe('<SendAnOffer />', () => {
  
  let store;

  beforeAll(() => {
    store = configureStore({});
  });

  it('Should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <SendAnOffer  />
      </Provider>
    );
    expect(container);
  });
});
