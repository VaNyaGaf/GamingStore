import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { CreatePublisherComponent } from './components/create-publisher/create-publisher.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
