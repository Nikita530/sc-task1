import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { PlayersService, User } from "./../shared/players.service";

@Component({
	selector: "app-start-game",
	templateUrl: "./start-game.component.html",
	styleUrls: ["./start-game.component.scss"],
})
export class StartGameComponent implements OnInit, OnDestroy {
	public user?: string;
	public gameType: "501" | "301" | null = null;
	/* public search?: string; */
	public filteredPlayers?: User[];

	public search = new FormControl("");

	public constructor(private playersService: PlayersService) { }

	public ngOnInit(): void {
		this.search.valueChanges.subscribe((value: string) => {
			this.filteredPlayers = this.playersService.players.filter((user) => user.username.startsWith(value));
		});
	}

	public ngOnDestroy(): void { }

	public get users() {
		return this.filteredPlayers?.length ? this.filteredPlayers : this.playersService.players;
	}

	/* public get users() {
		return this.playersService.players.filter((v) => v.username.match(new RegExp(this.search || '', 'i')));
	} */

	public onRemovePlayer(userId: number) {
		this.playersService.removePlayer(userId);
		this.search.reset();
	}
}
