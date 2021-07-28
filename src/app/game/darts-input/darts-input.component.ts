import { Component, OnInit, Output,Input } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayersService } from '../../shared/players.service';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs/operators';
import { StartGameComponent } from 'src/app/start-game/start-game.component';
import { CoefficientBtnComponent } from './coefficient-btn/coefficient-btn.component';


export type gameType = 501 | 301;

@Component({
  selector: 'app-darts-input',
  templateUrl: './darts-input.component.html',
  styleUrls: ['./darts-input.component.scss']
})
export class DartsInputComponent implements OnInit {
  public user?: string;
  public pointsCounter: number[][] = [];
  public value: number | null = null;

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
      firstDart: this.fb.group({
        dart: ['', [Validators.required, Validators.max(50), Validators.min(0), Validators.pattern(/[0-9]/)]],
        coefficient: [null, Validators.required]
      }),
      secondDart: this.fb.group({
        dart: ['', [Validators.required, Validators.max(50), Validators.min(0), Validators.pattern(/[0-9]/)]],
        coefficient: [null, Validators.required]
      }), 
      thirdDart: this.fb.group({
        dart: ['', [Validators.required, Validators.max(50), Validators.min(0), Validators.pattern(/[0-9]/)]],
        coefficient: [null, Validators.required]
      })
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
            shot.firstDart.dart  -
            shot.secondDart.dart  -
            shot.thirdDart.dart 
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
