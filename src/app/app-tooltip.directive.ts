import { Directive, ElementRef, Host, HostListener, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
	selector: "[appTooltip]"
})
export class TooltipDirective {

	public hasView = false;

	public constructor(
		private tr: TemplateRef<any>,
		private vc: ViewContainerRef,
		private el: ElementRef
	) { }

	@HostListener("mouseenter") public onmouseenter() {
		this.hasView = true;
	}

	// @HostListener("mouseleave") public onmouseleave() {
	// 	this.hasView = false;
	// }

	// @Input() public set appTooltip(condition: boolean) {


	// 	if (!condition && !this.hasView) {
	// 		this.vc.createEmbeddedView(this.tr);
	// 		this.hasView = true;
	// 	}
	// 	else if (condition && this.hasView) {
	// 		this.vc.clear();
	// 		this.hasView = false;

	// 	}
	// }




}
