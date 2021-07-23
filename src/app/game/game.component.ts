import { Component, Input, OnInit } from '@angular/core';
import { PlayersService } from '../shared/players.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

/* 
export interface Shot {
  points: Dart[];
}

export interface Dart {
  firstDart: string;
  secondDart: string;
  thirdDart: string;
}
 */

export type gameType = 501 | 301;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public user?: string;
  public pointsCounter: number[][] = [];
  public coefficientBtn: '1x' | '2x' | '3x' | null = null;

  constructor(
    private playersService: PlayersService,
    private fb: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

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

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.pointsCounter.push(this.playersService.players.map(() => +params.gameType as gameType));
    });
  }

  public get arrDarts(): FormArray {
    return this.dartsForm.get('darts') as FormArray;
  }
  // public get firstDart(){
  //   return this.dartsForm.get('firstDarts') as FormArray;
  // }

  public newDart(): FormGroup {
    return this.fb.group({
      firstDart: ['', [Validators.required, Validators.max(20), Validators.min(0), Validators.pattern(/[0-9]/)]],
      secondDart: ['', [Validators.required, Validators.max(20), Validators.min(0), Validators.pattern(/[0-9]/)]],
      thirdDart: ['', [Validators.required, Validators.max(20), Validators.min(0), Validators.pattern(/[0-9]/)]],
    });
  }

  public get users() {
    return this.playersService.players;
  }

  // public coefficientButtons(){
  //   if(this.coefficientBtn === '2x'){
  //     const finishValue = +(this.firstDart) * 2; 
  //     return finishValue;
  //   }
    
  // }


  public savePoints(): void {
    if (this.dartsForm.valid) {
      /*  this.shots.push({ points: this.playersService.players.map((_, i) => this.arrDarts.at(i).value) }); */
      const lastRow = this.pointsCounter[this.pointsCounter.length - 1];
      this.pointsCounter.push(
        lastRow.map((count, i) => {
          const shot = this.arrDarts.at(i).value;
          return count - shot.firstDart - shot.secondDart - shot.thirdDart;
        })
      );
      this.dartsForm.reset();
    }
  }

  public onNewGame(): void {
    this.playersService.players = [];
    this.router.navigate(['/start-game']);
  }

}
