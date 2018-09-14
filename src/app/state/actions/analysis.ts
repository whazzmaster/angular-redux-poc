import { Analysis } from '../models/analysis';
import { ActionsUnion } from './types';
import { createAction } from './action-helpers';

export enum ActionTypes {
  SET_CURRENT_ANALYSIS = '[analysis] SET_CURRENT_ANALYSIS',
  LOAD_ANALYSES = '[analysis] LOAD_ANALYSES',
}

export const Actions = {
  setCurrentAnalysis: (analysis: Analysis) => createAction(ActionTypes.SET_CURRENT_ANALYSIS, analysis),
  loadAnalyses: (analyses: Analysis[]) => createAction(ActionTypes.LOAD_ANALYSES, analyses),
};

export type Actions = ActionsUnion<typeof Actions>;
