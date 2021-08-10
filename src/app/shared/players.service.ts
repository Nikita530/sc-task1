import { Injectable } from "@angular/core";
import { Form, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserFormvalue as UserFormValue } from "../add-player/add-player.component";

export interface User {
	id: number;
	username: string;
	email: string;
	isWin?: boolean;
}

@Injectable({
	providedIn: "root",
})
export class PlayersService {
	public constructor(private fb: FormBuilder, private router: Router) { }
	public players: User[] = [];
	private lastId = 0;

	public removePlayer(userId: number) {
		const userIndex = this.players.findIndex((user) => user.id === userId);
		if (userIndex >= 0) {
			this.players.splice(userIndex, 1);
		}
	}

	public createNewGame(): void {
		this.players = [];
		this.router.navigate(["/start-game"]);
	}

	public addPlayer(user: UserFormValue) {
		this.players.push({ ...user, id: this.lastId++ });
	}

}

