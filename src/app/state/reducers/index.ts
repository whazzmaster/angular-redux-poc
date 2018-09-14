import { combineReducers } from 'redux';

import analysis, { AnalysisAppState, initialAnalysisAppState } from './analysis';

export interface AppState {
  analysis: AnalysisAppState;
}

export const INITIAL_APP_STATE: AppState = {
  analysis: initialAnalysisAppState,
};

export default combineReducers({
  analysis,
});
