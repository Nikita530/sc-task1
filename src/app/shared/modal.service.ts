import { Injectable } from "@angular/core";


@Injectable({
	providedIn: "root"
})
export class ModalService {

	public constructor() { }

	private modals: any[] = [];

	public add(modal: object) {
		this.modals.push(modal);
	}


	public open(id: string) {
		const modal = this.modals.find(x => x.id === x.id);
		modal.open();
	}

	public close(id: string) {
		const modal = this.modals.find(x => x.id === x.id);
		modal.close();
	}
}
