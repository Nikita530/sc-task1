import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../shared/players.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit { 
  public user?: string;
  public points?: any;
  public dart?: any;
  //public dartsForm?: FormGroup;
  // public darts?: any;
  
  

  constructor(private playersService: PlayersService, private fb: FormBuilder) { 
  }
  
  public dartsForm = this.fb.group({
    darts: this.fb.array([
      this.newDart(),
      

    ]), 
  });

  

  ngOnInit(): void {
    
  }
  
  public get arrDarts(): FormArray{
    return this.dartsForm.controls["darts"] as FormArray;
  }

  public newDart(): FormGroup{
    return this.fb.group({
        firstDart: ['', Validators.required],
        secondDart: ['', Validators.required],
        thirdDart: ['', Validators.required]
      });
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

}
