import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PlayersService } from "../../shared/players.service";



export type gameType = 501 | 301;


@Component({
	selector: "app-darts-input",
	templateUrl: "./darts-input.component.html",
	styleUrls: ["./darts-input.component.scss"]
})
export class DartsInputComponent implements OnInit {



	public constructor(
		private playersService: PlayersService,
		private fb: FormBuilder,
		private activateRoute: ActivatedRoute
	) { }


	public get arrDarts(): FormArray {
		return this.dartsForm.get("darts") as FormArray;
	}

	public get users() {
		return this.playersService.players;
	}
	public user?: string;
	public pointsCounter: number[][] = [];
	public value: number | null = null;

	public dartsForm = this.fb.group({
		darts: this.fb.array(this.playersService.players.map((players) => this.newDart())),
	});

	public ngOnInit(): void {
		this.activateRoute.params.subscribe((params) => {
			this.pointsCounter.push(this.playersService.players.map(() => +params.gameType as gameType));
		});
	}

	public newDart(): FormGroup {
		return this.fb.group({
			firstDart: this.fb.group({
				dart: ["", [Validators.required, Validators.max(50), Validators.min(0), Validators.pattern(/[0-9]/)]],
				coefficient: [null, Validators.required]
			}),
			secondDart: this.fb.group({
				dart: ["", [Validators.required, Validators.max(50), Validators.min(0), Validators.pattern(/[0-9]/)]],
				coefficient: [null, Validators.required]
			}),
			thirdDart: this.fb.group({
				dart: ["", [Validators.required, Validators.max(50), Validators.min(0), Validators.pattern(/[0-9]/)]],
				coefficient: [null, Validators.required]
			})
		});
	}

	public savePoints(): void {
		if (this.dartsForm.valid) {
			const lastRow = this.pointsCounter[this.pointsCounter.length - 1];
			this.pointsCounter.push(
				lastRow.map((count, i) => {
					const shot = this.arrDarts.at(i).value;
					if ((count -
						shot.firstDart.dart * shot.firstDart.coefficient -
						shot.secondDart.dart * shot.secondDart.coefficient -
						shot.thirdDart.dart * shot.thirdDart.coefficient) === 0 || this.pointsCounter.length === 16) {

						this.users[i].isWin = true;
						this.dartsForm.disable();
					}
					else if ((count -
						shot.firstDart.dart * shot.firstDart.coefficient -
						shot.secondDart.dart * shot.secondDart.coefficient -
						shot.thirdDart.dart * shot.thirdDart.coefficient) < 0) {

						return (count);

					}
					return (
						count -
						shot.firstDart.dart * shot.firstDart.coefficient -
						shot.secondDart.dart * shot.secondDart.coefficient -
						shot.thirdDart.dart * shot.thirdDart.coefficient
					);

				})
			);
			this.dartsForm.reset();
		}

	}

}
