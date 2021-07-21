import { Component, Input, OnInit } from '@angular/core';
import { PlayersService } from '../shared/players.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StartGameComponent } from '../start-game/start-game.component';

export interface Shot {
  points: Dart[];
}

export interface Dart {
  firstDart: string;
  secondDart: string;
  thirdDart: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public user?: string;
  public shots: Shot[] = [];
  public coefficientBtn: "1x" | "2x" | "3x" | null = null;
  public firstType = 501;
  public secondType = 301;

  constructor(private playersService: PlayersService, private fb: FormBuilder, private router: Router) {}

  @Input() public gameType: "501" | "301" | null = null;

  /* 
  
  group dartsForm (
    darts - Array (
      [0] - group(controls...),
      [1] - group(controls...)
      ...
    )
  )

  */

  public dartsForm = this.fb.group({
    darts: this.fb.array(this.playersService.players.map((players) => this.newDart())),
  });

  ngOnInit(): void {}

  public get arrDarts(): FormArray {
    return this.dartsForm.get('darts') as FormArray;
  }

  public newDart(): FormGroup {
    return this.fb.group({
      firstDart: ['', Validators.required],
      secondDart: ['', Validators.required],
      thirdDart: ['', Validators.required],
    });
  }

  public get users() {
    return this.playersService.players;
  }

  savePoints(): void {
    if (this.dartsForm.valid) {
      this.shots.push({ points: this.playersService.players.map((_, i) => this.arrDarts.at(i).value) });
      this.dartsForm.reset();
    }
  }

  public onNewGame(): void {
    this.playersService.players = [];
    this.router.navigate(['/start-game']);
  }
}
