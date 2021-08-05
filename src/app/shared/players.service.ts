import { Injectable } from "@angular/core";
import { Form, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

export interface User {
	username: string;
	email: string;
	isWin: boolean;

}

@Injectable({
	providedIn: "root",
})
export class PlayersService {


	public constructor(private fb: FormBuilder, private router: Router) { }
	public players: User[] = [];
	public isValPlayers?: true | false = true;


	public createNewGame(): void {
		this.players = [];
		this.router.navigate(["/start-game"]);
	}

	public addPlayer(user: User) {
		this.players.push(user);
	}




}

