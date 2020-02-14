import { State } from './../reducers';
import { State as PagesState } from './../reducers/pages.reducer';
import { createSelector, MemoizedSelector } from '@ngrx/store';

export const selectFeature = (state: State) => state.pages;

export const isSubmitActive: MemoizedSelector<State, any> = createSelector(
    selectFeature,
    (state: PagesState) => Object.keys(state).every((key: string) => state[key] && state[key].length && state[key].trim().length)
);
