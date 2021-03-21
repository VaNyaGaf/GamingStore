import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GameListState } from "./game-list-state.interface";

const featureKey = 'feature';
export const gameListStateSelector = createFeatureSelector<GameListState>(featureKey);

export const sortingCriteriaSelector = createSelector(
    gameListStateSelector,
    state => state.sortCriteria
);
export const gamesSelector = createSelector(
    gameListStateSelector,
    state => state.games
);