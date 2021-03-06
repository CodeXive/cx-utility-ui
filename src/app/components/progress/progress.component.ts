import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Progress } from 'src/app/model/progress.model';

@Component({
	selector: 'app-progress',
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements AfterViewInit {

	interval: any;
	value: number = 0;
	@Input() progress!: Progress;
	@Output() hideEvent = new EventEmitter<boolean>();


	constructor() { }

	ngAfterViewInit(): void {
		if (this.progress != undefined) {
			this.value = 0;
			const bg: HTMLElement = <HTMLElement>document.getElementsByClassName("progress-bar")[0];
			bg.style.backgroundColor = this.progress.fillColor;
			const bg2: HTMLElement = <HTMLElement>document.getElementsByClassName("progress")[0];
			bg2.style.backgroundColor = this.progress.backgroundColor;
			const increment: number = 100 / (this.progress.time / 100);
			this.interval = setInterval(() => {
				if (this.progress.time > 0) {

					this.progress.time = this.progress.time - 100;
					this.value = this.value + increment;
				} else {
					this.progress.animated = false;
					clearInterval(this.interval);
					setTimeout(() => {
						this.hideEvent.emit(true);
					}, 1000);
				}
			}, 100);
		}
	}

	cancel(): void {
		clearInterval(this.interval);
	}

}
