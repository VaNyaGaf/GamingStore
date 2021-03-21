import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models';
import { GameListState } from './store/game-list-state.interface';
import { loadGames, setSortingCriteria } from './store/game-list.actions';
import { gamesSelector, sortingCriteriaSelector } from './store/game-list.selectors';

@Component({
  selector: 'gs-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public sortingCriteria$: Observable<string> = this.store.select(sortingCriteriaSelector);
  public games$: Observable<Game[]> = this.store.select(gamesSelector);

  constructor(
    private store: Store<GameListState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadGames());
  }

  onSortOptionChange(event) {
    const value = event.target.value;
    this.store.dispatch(setSortingCriteria({ sortCriteria: value }));
  }
}
