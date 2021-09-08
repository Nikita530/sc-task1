import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { StartGameComponent } from "./start-game/start-game.component";

@Directive({
	selector: "[appTooltip]"
})
export class TooltipDirective {

	public hasView = false;

	public constructor(
		private el: ElementRef
	) { }


	@Input() public appTooltip = " ";

	@HostListener("mouseenter") public onMouseEnter() {
		this.showMessage("black");
	}

	@HostListener("mouseleave") public onMouseLeave() {
		this.showMessage("");
	}

	private showMessage(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}





}
