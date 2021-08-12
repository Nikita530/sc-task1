import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { combineLatest, Observable, Subject } from "rxjs";
import {
	debounceTime,
	distinctUntilChanged,
	filter,
	map,
	startWith,
	switchMap,
	tap,
	withLatestFrom,
} from "rxjs/operators";
import { PlayersService, User } from "./../shared/players.service";

@Component({
	selector: "app-start-game",
	templateUrl: "./start-game.component.html",
	styleUrls: ["./start-game.component.scss"],
})
export class StartGameComponent implements OnInit, OnDestroy {
	public user?: string;
	public gameType: "501" | "301" | null = null;
	public search = new FormControl("");
	public initialPlayers = this.playersService.players;
	public fitleredPlayers$?: Observable<User[]>;

	public constructor(private playersService: PlayersService) { }
	/* public ngOnInit(): void {
		this.search.valueChanges.subscribe((value: string) => {
			this.filteredPlayers = this.playersService.players.filter((user) => user.username.startsWith(value));
		});
	} */
	/* [users, search] -> [users, search]
	[users, search] -> 300 -> User[]
	User[] */
	public ngOnInit(): void {
		this.fitleredPlayers$ = combineLatest([
			this.playersService.playersObservable,
			this.search.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), startWith("")),
		]).pipe(map(([users, search]) => (search ? users?.filter((user) => user.username.startsWith(search)) : users)));

	}
	/* this.$fitleredPlayers = this.search.valueChanges.pipe(
		debounceTime(300),
		distinctUntilChanged(),
		withLatestFrom(this.playersService.statePlayers),
		map(([search, users]) => (search ? users?.filter((user) => user.username.startsWith(search)) : users))
	); */


	/* public get viewPlayers(): User[] {
		return this.fitleredPlayers.length || this.search.value ? this.fitleredPlayers : this.playersService.players;
	} */

	public ngOnDestroy(): void { }

	public onRemovePlayer(userId: number) {
		this.playersService.removePlayer(userId);
		this.search.reset();
	}
}
