import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PlayersService } from "./../shared/players.service";


export interface UserFormvalue {
	username: string;
	email: string;
}

@Component({
	selector: "app-add-player",
	templateUrl: "./add-player.component.html",
	styleUrls: ["./add-player.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPlayerComponent implements OnInit {
	public players: any;

	public constructor(private fb: FormBuilder, private playersService: PlayersService, private router: Router) { }

	public form = this.fb.group({
		username: [null, Validators.required],
		email: [null, Validators.email],
	});

	public ngOnInit() {
	}

	public onClickSubmit() {
		if (this.form.valid) {
			this.playersService.addPlayer(this.form.value);
			this.router.navigate(["/start-game"]);
		}

	}

}
