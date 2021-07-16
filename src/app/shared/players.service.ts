import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


interface User {
  username: string;
  email: string;
}
interface Dart{
  firstDart: string;
  secondDart: string;
  thirdDart: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  players: User[] = [];
  points: Dart[] = [];




  constructor(private fb: FormBuilder, private router: Router) {}

  /*onSubmit() {
    if (this.playerService.form.valid) {
      this.players.push({ ...this.form.value, a: () => 'Никита' });
      this.router.navigate(['start-game']);
    }
  }*/
  
  /* GET heroes whose name contains search term */

}

