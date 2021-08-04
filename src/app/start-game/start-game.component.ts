import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { map, tap } from "rxjs/operators";
import { PlayersService, User } from "./../shared/players.service";

@Component({
	selector: "app-start-game",
	templateUrl: "./start-game.component.html",
	styleUrls: ["./start-game.component.scss"],
})
export class StartGameComponent implements OnInit, OnDestroy {

	public constructor(private playersService: PlayersService) { }

	public get users() {
		return this.filteredPlayers || this.playersService.players;
	}
	public user?: string;
	public gameType: "501" | "301" | null = null;

	public filteredPlayers?: User[];
	public search = new FormControl("");


	public ngOnInit(): void {
		this.search.valueChanges.subscribe((value: string) => {
			this.filteredPlayers = this.playersService.players.filter((user) => user.username.startsWith(value));
		});
	}

	public ngOnDestroy(): void { }


	public removePlayer(index: number) {
		this.playersService.players.splice(index, 1);
	}



}
