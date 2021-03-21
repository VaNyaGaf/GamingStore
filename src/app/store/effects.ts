import { Store } from '@ngrx/store'
import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { GameService } from "src/app/services";

import { AppState, Game } from 'src/app/models';


@Injectable()
export class AppEffects {
    constructor(
        private store: Store<AppState>,
        private actions$: Actions
    ) {}
}
