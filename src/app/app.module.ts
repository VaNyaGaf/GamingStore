import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { CreatePublisherComponent } from './components/create-publisher/create-publisher.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './components/game-list/store/game-list.effects';
import { gameListReducer } from './components/game-list/store/game-list.reducer';
import { AppEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    CreateGameComponent,
    CreatePublisherComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({appState: reducer}),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature('feature', gameListReducer),
    EffectsModule.forFeature([GameEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
