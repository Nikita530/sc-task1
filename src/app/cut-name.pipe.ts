import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "cutName"
})
export class CutNamePipe implements PipeTransform {

	public transform(value: string, maxLength: number = 20): string {
		if (value.length > maxLength) {
			return value.substring(0, maxLength);
		}
		else return value;
	}

}
