import { ActionsUnion } from './types';
import { createAction } from './action-helpers';

export enum ActionTypes {
  START_FETCH = '[network] START_FETCH',
  COMPLETE_FETCH = '[network] COMPLETE_FETCH'
}

export const Actions = {
  startFetch: () => createAction(ActionTypes.START_FETCH),
  completeFetch: () => createAction(ActionTypes.COMPLETE_FETCH),
};

export type Actions = ActionsUnion<typeof Actions>;
