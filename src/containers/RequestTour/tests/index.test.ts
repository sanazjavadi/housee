import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from '@utils/configure-store';

import { RequestTour } from '..';

describe('<RequestTour />', () => {
  
  let store;

  beforeAll(() => {
    store = configureStore({});
  });

  it('Should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <RequestTour  />
      </Provider>
    );
    expect(container);
  });
});
