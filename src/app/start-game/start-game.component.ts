import { PlayersService } from './../shared/players.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 
@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {
  public user?: string;
  public gameType: "501" | "301" | null = null;

  

  constructor(private playersService: PlayersService) {}
  

  ngOnInit(): void {
    
  }
  public get users() {
    return this.playersService.players;
  }
  
  public removePlayer(index: number) {
    this.playersService.players.splice(index, 1);
  }
  
  
  
}
