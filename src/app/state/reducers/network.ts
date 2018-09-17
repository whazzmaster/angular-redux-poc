import * as fromActions from '../actions/network';

export interface NetworkAppState {
  loading: boolean;
}

export const initialNetworkAppState: NetworkAppState = {
  loading: true,
};

export default function (state = initialNetworkAppState, action: fromActions.Actions) {
  switch (action.type) {
    case fromActions.ActionTypes.START_FETCH: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActions.ActionTypes.COMPLETE_FETCH: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
