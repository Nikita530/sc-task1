import { PlayersService } from './../shared/players.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {
  public user?: string;
  fbToggle: boolean = true;
  sbToggle: boolean = true;

  constructor(private playersService: PlayersService) {}
  ngOnInit(): void {}

  public get users() {
    return this.playersService.players;
  }

  public removePlayer(index: number) {
    this.playersService.players.splice(index, 1);
  }
  
}
