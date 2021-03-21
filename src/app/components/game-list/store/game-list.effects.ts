import { Store } from '@ngrx/store'
import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { GameService } from "src/app/services";
import { loadGames, setGames, setSortingCriteria, sortGames } from "./game-list.actions";
import { GameListState } from './game-list-state.interface';
import { gamesSelector, sortingCriteriaSelector } from './game-list.selectors';
import { Game } from 'src/app/models';


@Injectable()
export class GameEffects {
    constructor(
        private store: Store<GameListState>,
        private actions$: Actions,
        private gameService: GameService) {}

    loadGames$ = createEffect(() => this.actions$.pipe(
        ofType(loadGames),
        concatLatestFrom(() => this.store.select(sortingCriteriaSelector)),
        switchMap(([action, sortCriteria]) => this.gameService.getGames().pipe(
            map(games => {
                if (sortCriteria) {
                    return sortGames({ games })
                }
                return setGames({ games })
            }),
            catchError(() => EMPTY),
        ))
    ));

    setSortingCriteria$ = createEffect(() => this.actions$.pipe(
        ofType(setSortingCriteria),
        concatLatestFrom(() => this.store.select(gamesSelector)),
        map(([action, games]) => {
            return sortGames({ games });
        })
    ));

    sortGames$ = createEffect(() => this.actions$.pipe(
        ofType(sortGames),
        concatLatestFrom(() => this.store.select(sortingCriteriaSelector)),
        map(([action, sortCriteria]) => {
            const games = this.sortGamesFunc(action.games, sortCriteria);
            return setGames({ games });
        })
    ));

    private sortGamesFunc(games: Game[], sortingCriteria: string) {
        return games.slice().sort((left, right) => {
            return left[sortingCriteria] < right[sortingCriteria] ? 1 : -1;
        });
    }
}
