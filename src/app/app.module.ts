import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AddPlayerComponent } from "./add-player/add-player.component";
import { AppRoutingModule } from "./app-routing.module";
import { TooltipDirective } from "./app-tooltip.directive";
import { AppComponent } from "./app.component";
import { CutNamePipe } from "./cut-name.pipe";

import { CoefficientBtnComponent } from "./game/darts-input/coefficient-btn/coefficient-btn.component";
import { DartsInputComponent } from "./game/darts-input/darts-input.component";
import { GameComponent } from "./game/game.component";
import { ModalComponent } from "./modal/modal.component";
import { StartGameComponent } from "./start-game/start-game.component";


@NgModule({
	declarations: [AppComponent, AddPlayerComponent, StartGameComponent,
		GameComponent, DartsInputComponent, CoefficientBtnComponent, CutNamePipe, TooltipDirective, ModalComponent],
	imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	entryComponents: [ModalComponent],
	bootstrap: [AppComponent],
})
export class AppModule { }
