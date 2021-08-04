import { Component, Input, OnInit } from '@angular/core';
import { ProgressCancel } from 'src/app/model/progress.model';

@Component({
	selector: 'app-progress-cancel',
	templateUrl: './progress-cancel.component.html',
	styleUrls: ['./progress-cancel.component.scss']
})
export class ProgressCancelComponent implements OnInit {

	@Input() progress!: ProgressCancel;

	constructor() { }

	ngOnInit(): void {
	}

}
