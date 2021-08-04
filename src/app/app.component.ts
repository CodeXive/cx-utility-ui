import { Component, HostListener, ViewChild } from '@angular/core';
import { ActionComponent } from './components/action/action.component';
import { Action, ActionPosition } from './model/action.model';
import { ToastService } from './service/toast.service';
import { Notification } from './model/notification.model';
import { Progress, ProgressCancel } from './model/progress.model';
import { ProgressComponent } from './components/progress/progress.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	action: Action = {
		key: "[E]",
		keyColor: "#FFFFFF",
		showKey: true,
		label: "Use",
		labelColor: "#FFFFFF",
		backgroundColor: "#FF7900",
		position: ActionPosition.LEFT_MIDDLE,
	};
	isActionVisible: boolean = false;

	progress!: Progress;
	isProgressVisible: boolean = false;

	progressCancel!: ProgressCancel;
	isProgressCancelVisible: boolean = false;

	@ViewChild("actionComponent", { static: false }) actionComponent!: ActionComponent;
	@ViewChild("progressComponent", { static: false }) progressComponent!: ProgressComponent;

	@HostListener("window:message", ["$event"]) receivedEvent(event: MessageEvent) {
		switch (event.data.action) {
			case "ShowAction":
				this.showAction(event.data.data);
				break;
			case "HideAction":
				this.hideAction();
				break;
			case "ShowNotification":
				this.showNotification(event.data.data);
				break;
			case "ShowProgress":
				this.showProgress(event.data.data);
				break;
			case "CancelProgress":
				this.cancelProgress(event.data.data);
				break;
			default:
				console.log("Invalid Action");
				break;
		}
	}

	constructor(private toastService: ToastService) { }

	showAction(data: Action): void {
		this.action = data;
		this.isActionVisible = true;
	}

	hideAction(): void {
		this.actionComponent.hide();

		setTimeout(() => {
			this.isActionVisible = false;
		}, 1000);
	}

	showNotification(data: Notification): void {
		if (data.empty) {
			this.toastService.toasts = [];
		}
		this.toastService.show(data.label, { classname: data.position.toLowerCase(), delay: data.time, color: data.labelColor, backgroundColor: data.backgroundColor });
	}

	showProgress(data: Progress): void {
		this.progress = data;
		this.isProgressVisible = true;
	}

	hideProgress(): void {
		this.isProgressVisible = false;
	}

	cancelProgress(data: ProgressCancel): void {
		if (this.isProgressVisible) {
			this.progressComponent.cancel();
			this.isProgressVisible = false;
		}
		this.progressCancel = data;
		this.isProgressCancelVisible = true;
		setTimeout(() => {
			this.isProgressCancelVisible = false;
		}, data.time)
	}

}
