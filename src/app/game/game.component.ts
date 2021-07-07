import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../shared/players.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit { 
  public user?: string;
  public points?: string;

  constructor(private playersService: PlayersService, private fb: FormBuilder) { }
  
  public faGroup = this.fb.group({
    arr: this.fb.array([
      this.fb.group({
        point: [null, Validators.required, Validators.min(0)],
      })
    ])
  })

  ngOnInit(): void {
  }
  
  public get users() {
    return this.playersService.players;
  }
  
  onSubmit(){
    if(this.faGroup.valid){
      this.playersService.points.push({...this.faGroup.value});
    }
  }



}
