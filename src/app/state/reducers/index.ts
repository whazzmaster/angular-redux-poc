import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';

import analysis, { AnalysisAppState, initialAnalysisAppState } from './analysis';
import network, { NetworkAppState, initialNetworkAppState } from './network';

export interface AppState {
  analysis: AnalysisAppState;
  network: NetworkAppState;
  router: string;
}

export const INITIAL_APP_STATE: AppState = {
  analysis: initialAnalysisAppState,
  network: initialNetworkAppState,
  router: '',
};

export default combineReducers({
  analysis,
  network,
  router: routerReducer,
});
