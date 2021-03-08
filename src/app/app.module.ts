import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { HeaderComponent } from './components/header/header.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
