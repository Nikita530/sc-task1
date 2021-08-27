import { Component, ElementRef, Input, OnDestroy, OnInit } from "@angular/core";
import { ModalService } from "../shared/modal.service";


@Component({
	selector: "app-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"],

})
export class ModalComponent implements OnInit {

	public constructor(private ms: ModalService, private el: ElementRef) {

	}

	@Input() public id: any;


	public ngOnInit(): void {
		this.ms.add(this);
		this.el.nativeElement.style.display = "none";
	}



	public open(): void {
		this.el.nativeElement.style.display = "block";
		document.body.classList.add("modal-open");
	}


	public close(): void {
		this.el.nativeElement.style.display = "none";
		document.body.classList.remove("modal-open");
	}

}
