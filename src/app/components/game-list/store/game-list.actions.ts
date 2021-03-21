import { createAction, props } from '@ngrx/store'
import { Game } from 'src/app/models'

export const setSortingCriteria = createAction(
    '[Game List] Set Sorting Criteria',
     props<{ sortCriteria: string }>(),
)
export const loadGames = createAction('[Game List] Load Games')
export const setGames = createAction(
    '[Game List] Set Games',
    props<{games: Game[]}>(),
)
export const sortGames = createAction(
    '[Game List] Sort Games',
    props<{games: Game[]}>(),
)
