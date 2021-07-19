import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


export interface User {
  username: string;
  email: string;
}



@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  players: User[] = [];




  constructor(private fb: FormBuilder, private router: Router) {}

  /*onSubmit() {
    if (this.playerService.form.valid) {
      this.players.push({ ...this.form.value, a: () => 'Никита' });
      this.router.navigate(['start-game']);
    }
  }*/
  
  /* GET heroes whose name contains search term */

}

