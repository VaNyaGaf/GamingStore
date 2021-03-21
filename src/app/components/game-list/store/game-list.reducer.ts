import { Action, createReducer, on } from '@ngrx/store';
import { GameListState } from './game-list-state.interface';
import { setGames, setSortingCriteria } from './game-list.actions';

export const gameListInitialState: GameListState = {
    games: [],
    sortCriteria: '',
}

const _gameListReducer = createReducer(
    gameListInitialState,
    on(setSortingCriteria, (state, { sortCriteria }) => ({
        ...state,
        sortCriteria,
    })),
    on(setGames, (state, { games }) => ({
        ...state,
        games,
    }))
)

export function gameListReducer(state: GameListState | undefined, action: Action) {
    return _gameListReducer(state, action);
}
