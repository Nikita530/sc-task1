import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PlayersService } from "../shared/players.service";


@Component({
	selector: "app-game",
	templateUrl: "./game.component.html",
	styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit {

	public constructor(
		private playersService: PlayersService,
		private router: Router,
	) {

	}
	public user?: string;
	public pointsCounter: number[][] = [];
	public coefficientBtn: 1 | 2 | 3 = 1;

	// public createNewGame(): void {
	//   this.playersService.players = [];
	//   this.router.navigate(['/start-game']);
	// }
	public ngOnInit(): void {

	}

	public onNewGameClick() {
		this.playersService.createNewGame();
	}

}
