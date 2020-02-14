import { Action } from '@ngrx/store';

export enum PagesActionTypes {
    UPDATE_STEPS_DATA = '[PAGE_ACTIONS] UPDATE_STEPS_DATA',
    CLEAR_ALL_DATA = '[PAGE_ACTIONS] CLEAR_ALL_DATA',
}

export class UpdateStepData implements Action {
    public readonly type: PagesActionTypes.UPDATE_STEPS_DATA = PagesActionTypes.UPDATE_STEPS_DATA;
    public constructor(public payload: {stepType: string, value: string}) { }
}

export class ClearAllData implements Action {
    public readonly type: PagesActionTypes.CLEAR_ALL_DATA = PagesActionTypes.CLEAR_ALL_DATA;
}

export type PagesActionsUnion =
    UpdateStepData |
    ClearAllData;
