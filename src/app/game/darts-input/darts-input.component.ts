import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayersService } from '../../shared/players.service';
import { ActivatedRoute, Router } from '@angular/router';


export type gameType = 501 | 301;

@Component({
  selector: 'app-darts-input',
  templateUrl: './darts-input.component.html',
  styleUrls: ['./darts-input.component.scss']
})
export class DartsInputComponent implements OnInit {
  public user?: string;
  public pointsCounter: number[][] = [];
  public coefficientBtn: 1 | 2 | 3 = 1;

  constructor(
    private playersService: PlayersService,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.pointsCounter.push(this.playersService.players.map(() => +params.gameType as gameType));
    });
  }

  public newDart(): FormGroup {
    return this.fb.group({
      firstDart: ['', [Validators.required, Validators.max(50), Validators.min(0), Validators.pattern(/[0-9]/)]],
      secondDart: ['', [Validators.required, Validators.max(50), Validators.min(0), Validators.pattern(/[0-9]/)]],
      thirdDart: ['', [Validators.required, Validators.max(50), Validators.min(0), Validators.pattern(/[0-9]/)]],
    });
  }

  public dartsForm = this.fb.group({
    darts: this.fb.array(this.playersService.players.map((players) => this.newDart())),
  });

  public get arrDarts(): FormArray {
    return this.dartsForm.get('darts') as FormArray;
  }

  public savePoints(): void {
    if (this.dartsForm.valid) {
      const lastRow = this.pointsCounter[this.pointsCounter.length - 1];
      this.pointsCounter.push(
        lastRow.map((count, i) => {
          const shot = this.arrDarts.at(i).value;
          return (
            count -
            shot.firstDart * this.coefficientBtn -
            shot.secondDart * this.coefficientBtn -
            shot.thirdDart * this.coefficientBtn
          );
          
        })
      );
      this.dartsForm.reset();
    }
  
  

  }

  public get users() {
    return this.playersService.players;
  }

}
