import { PagesActionTypes, PagesActionsUnion } from '../actions/pages.actions';

export interface State {
    name: string;
    phone: string;
    email: string;
}

export const initialState: State = {
    name: '',
    phone: '',
    email: '',
};

export function reducer(
    state: State = initialState,
    action: PagesActionsUnion
): State {
    switch (action.type) {
        case PagesActionTypes.UPDATE_STEPS_DATA: {
            return {
                ...state,
                [action.payload.stepType]: action.payload.value
            };
        }

        case PagesActionTypes.CLEAR_ALL_DATA: {
            return {
                ...initialState
            };
        }

        default: {
            return state;
        }
    }
}
