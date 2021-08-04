import { Component, HostListener, ViewChild } from '@angular/core';
import { ActionComponent } from './components/action/action.component';
import { Action, ActionPosition } from './model/action.model';
import { ToastService } from './service/toast.service';
import { Notification } from './model/notification.model';

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

	@ViewChild("actionComponent", { static: false }) actionComponent!: ActionComponent;

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
				break;
			case "HideProgress":
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
		// if (data.empty) {
		// 	this.toastService.toasts = [];
		// }
		this.toastService.show(data.label, { classname: data.position.toLowerCase(), delay: data.time, color: data.labelColor, backgroundColor: data.backgroundColor });
	}

}
