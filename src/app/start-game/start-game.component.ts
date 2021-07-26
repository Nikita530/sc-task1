import { PlayersService, User } from './../shared/players.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit, OnDestroy {
  public user?: string;
  public gameType: '501' | '301' | null = null;
  /* public search?: string; */
  public filteredPlayers?: User[];

  public search = new FormControl('');

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.search.valueChanges.subscribe((value: string) => {
      this.filteredPlayers = this.playersService.players.filter((user) => user.username.startsWith(value));
    });
  }

  ngOnDestroy(): void {}

  public get users() {
    return this.filteredPlayers || this.playersService.players;
  }

  /* public get users() {
    return this.playersService.players.filter((v) => v.username.match(new RegExp(this.search || '', 'i')));
  } */

  public removePlayer(index: number) {
    this.playersService.players.splice(index, 1);
  }
}
