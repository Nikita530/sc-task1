import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './add-player/add-player.component';
import { StartGameComponent } from './start-game/start-game.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {path: '', redirectTo: '/start-game', pathMatch: 'full' },
  {path: 'start-game', component: StartGameComponent},
  {path: 'add-player', component: AddPlayerComponent},
  {path: 'game', component: GameComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
