import { Action, createReducer, on } from '@ngrx/store';
import { gameListInitialState, gameListReducer } from '../components/game-list/store/game-list.reducer';
import { AppState } from '../models';

export const initialState: AppState = {
}

const _reducer = createReducer(
    initialState,
)

export function reducer(state: AppState | undefined, action: Action) {
    return _reducer(state, action);
}
