import { PlayersService } from './../shared/players.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
})
export class AddPlayerComponent implements OnInit {
  public players: any;

  constructor(private fb: FormBuilder, private playersService: PlayersService, private router: Router) {}

  public form = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.email],
  });

 

  ngOnInit() {
    //this.players = this.playersService.onSubmit();
  }

  onSubmit() {
    if (this.form.valid) {
      this.playersService.players.push({ ...this.form.value, getString: () => 'Никита' });
      this.router.navigate(['start-game']);
    }
  }
  
}
