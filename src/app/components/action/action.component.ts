import { Component, Input, OnInit } from '@angular/core';
import { Action } from 'src/app/model/action.model';

@Component({
	selector: 'app-action',
	templateUrl: './action.component.html',
	styleUrls: ['./action.component.scss']
})
export class ActionComponent {

	@Input() action!: Action;
	@Input() isVisible: boolean = false;

	constructor() { }

	hide(): void {
		if (this.isVisible) {
			this.action.position = this.action.position + "_out";
		}
	}

}
