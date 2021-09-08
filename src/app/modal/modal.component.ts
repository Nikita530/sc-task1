import { Component, ElementRef, EventEmitter, OnInit, Output } from "@angular/core";



@Component({
	selector: "app-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"],

})
export class ModalComponent implements OnInit {


	@Output() public delete = new EventEmitter<any>();

	public constructor(private el: ElementRef) {

	}

	public ngOnInit(): void {
		// this.ms.add(this);
		// this.el.nativeElement.style.display = "none";
	}



	// public open(): void {
	// 	this.el.nativeElement.style.display = "block";
	// 	document.body.classList.add("modal-open");
	// }


	// public close(): void {
	// 	this.el.nativeElement.style.display = "none";
	// 	document.body.classList.remove("modal-open");
	// }

}
