import { Component, Input, OnInit } from '@angular/core';
import { PlayersService } from '../shared/players.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
   public user?: string;
   public pointsCounter: number[][] = [];
   public coefficientBtn: 1 | 2 | 3 = 1;

  constructor(
    private playersService: PlayersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  public onNewGame(): void {
    this.playersService.players = [];
    this.router.navigate(['/start-game']);
  }
}
