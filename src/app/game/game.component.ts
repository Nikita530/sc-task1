import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, OnInit, Output, ViewChild, ViewContainerRef } from "@angular/core";
import { Router } from "@angular/router";
import { ModalComponent } from "../modal/modal.component";
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
		private router: Router,
		private resolver: ComponentFactoryResolver,
		public cr: ViewContainerRef,
	) {

	}
	public user?: string;
	public pointsCounter: number[][] = [];
	public coefficientBtn: 1 | 2 | 3 = 1;


	public ngOnInit(): void {

	}

	public showModal() {
		const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
		this.cr.clear();

		const component = this.cr.createComponent(modalFactory);
		component.instance.delete.subscribe(() => {
			this.cr.clear();
		});

	}

	public onNewGameClick() {
		this.playersService.createNewGame();
	}

}



