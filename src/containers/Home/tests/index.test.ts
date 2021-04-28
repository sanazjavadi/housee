import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from 'utils/configure-store';

import { Home } from '..';

describe('<Home />', () => {
  const t = jest.fn();
  let store;

  beforeAll(() => {
    store = configureStore({});
  });

  it('Should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Home t={t} />
      </Provider>
    );
    expect(container);
  });
});
