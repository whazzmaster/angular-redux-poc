import * as fromActions from '../actions/analysis';
import { Analysis } from '../models/analysis';

export interface AnalysisAppState {
  selected: Analysis;
  list: Analysis[];
}

export const initialAnalysisAppState: AnalysisAppState = {
  selected: null,
  list: [],
};

export default function(state = initialAnalysisAppState, action: fromActions.Actions) {
  switch (action.type) {
    case fromActions.ActionTypes.SET_CURRENT_ANALYSIS: {
      const { payload: newAnalysis } = action;
      const newState: AnalysisAppState = { ...state, selected: newAnalysis };
      return newState;
    }

    case fromActions.ActionTypes.SET_CURRENT_ANALYSIS_BY_ID: {
      const { payload: newAnalysisId } = action;
      const newAnalysis = state.list.find((a) => {
        return a.id === newAnalysisId;
      });
      console.log('found analysis', newAnalysis);
      const newState: AnalysisAppState = { ...state, selected: newAnalysis };
      return newState;
    }

    case fromActions.ActionTypes.LOAD_ANALYSES: {
      const { payload: analyses } = action;
      const newState: AnalysisAppState = { ...state, list: analyses };
      return newState;
    }

    default: {
      return state;
    }
  }
}
