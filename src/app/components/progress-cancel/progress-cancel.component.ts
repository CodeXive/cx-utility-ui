import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ProgressCancel } from 'src/app/model/progress.model';

@Component({
	selector: 'app-progress-cancel',
	templateUrl: './progress-cancel.component.html',
	styleUrls: ['./progress-cancel.component.scss']
})
export class ProgressCancelComponent implements AfterViewInit {

	@Input() progress!: ProgressCancel;

	constructor() { }
	ngAfterViewInit(): void {
		const bg: HTMLElement = <HTMLElement>document.getElementsByClassName("progress-bar")[0];
		bg.style.backgroundColor = this.progress.fillColor;
	}

}
