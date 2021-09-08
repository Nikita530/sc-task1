import { Injectable } from "@angular/core";
import { Form, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { UserFormvalue } from "../add-player/add-player.component";

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
	public statePlayers = new BehaviorSubject<User[]>([]);
	private lastId = 0;

	public constructor(private fb: FormBuilder, private router: Router) { }

	public get playersObservable() {
		return this.statePlayers.asObservable();
	}

	public removePlayer(userId: number) {
		this.statePlayers.next(this.statePlayers.getValue().filter((user) => user.id !== userId));
	}

	public get players() {
		return this.statePlayers.value;
	}

	/* public removePlayer(userId: number) {
		const userIndex = this.players.findIndex((user) => user.id === userId);
		if (userIndex >= 0) {
			this.players.splice(userIndex, 1);
		}
	} */

	public createNewGame(): void {
		this.statePlayers.next([]);
		this.router.navigate(["/start-game"]);
	}

	public addPlayer(user: UserFormvalue) {
		this.statePlayers.next([...this.statePlayers.value, { ...user, id: this.lastId++ }]);
	}
}
