import produce from 'immer';

// import { ACTION  } from './actions';

export const initialState = {
  loading: false,
  fetched: false,
  error: null,
  // data: []
};

// Example

/*

const TestReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case ACTION.REQUEST:
        draft.loading = true;

        break;

      case ACTION.SUCCESS:
        draft.loading = false;
        draft.fetched = true;
        draft.data = payload.data;

        break;

      case ACTION.FAILURE:
        draft.loading = false;
        draft.fetched = false;
        draft.error = payload;

        break;
    }
  });

export default TestReducer;

*/