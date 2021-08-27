import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalService } from "../shared/modal.service";
import { PlayersService } from "../shared/players.service";


@Component({
	selector: "app-game",
	templateUrl: "./game.component.html",
	styleUrls: ["./game.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {

	public constructor(
		private playersService: PlayersService,
		private ms: ModalService,
		private router: Router,
	) {

	}
	public user?: string;
	public pointsCounter: number[][] = [];
	public coefficientBtn: 1 | 2 | 3 = 1;


	public ngOnInit(): void {

	}

	public openModal(id: string) {
		this.ms.open(id);
	}

	public closeModal(id: string) {
		this.ms.close(id);
	}

	public onNewGameClick() {
		this.playersService.createNewGame();
	}

}

