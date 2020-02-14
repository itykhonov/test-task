import { ActionReducerMap } from '@ngrx/store';
import * as fromPages from './pages.reducer';

export interface State {
    pages: fromPages.State;
}

export const reducers: ActionReducerMap<State> = {
    pages: fromPages.reducer,
};
