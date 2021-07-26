import { PlayersService } from './shared/players.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { StartGameComponent } from './start-game/start-game.component';
import { GameComponent } from './game/game.component';
import { DartsInputComponent } from './game/darts-input/darts-input.component';

@NgModule({
  declarations: [AppComponent, AddPlayerComponent, StartGameComponent, GameComponent, DartsInputComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [PlayersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
