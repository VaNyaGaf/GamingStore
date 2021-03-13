import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CreatePublisherComponent } from './components/create-publisher/create-publisher.component';

const routes: Routes = [
  {
    path: 'games',
    component: GameListComponent,
  },
  {
    path: 'create-game',
    component: CreateGameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-publisher',
    component: CreatePublisherComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full',
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
