import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../shared/players.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit { 
  public user?: string;
  public points?: any;
  public dart?: any;
  

  constructor(private playersService: PlayersService, private fb: FormBuilder) { }
  
  /*public faGroup = this.fb.group({
    arr: this.fb.array([
      this.fb.group({
        point: [null, Validators.required, Validators.min(0)],
      })
    ])
  })*/
  public dartsForm = this.fb.group({
        firstDart: [null, Validators.required],
        secondDart: [null, Validators.required],
        thirdDart: [null, Validators.required]
  });

  ngOnInit(): void {
  }
  
  public get users() {
    return this.playersService.players;
  }
  
  
  onSubmit(){
    if(this.dartsForm.valid){
      this.playersService.points.push({...this.dartsForm.value,  getString: () => '0' });
      console.log(this.playersService.points);
    }
  }
  public get point(){
    return this.playersService.points;
  }

  /*public get dartArr(){
    return this.dartsForm.get('dartArr') as FormArray;
  }
  adddartArr(){
    this.dartArr.push(this.fb.control(''));
  }

*/

}
