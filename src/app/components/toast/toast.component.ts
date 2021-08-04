import { Component, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/service/toast.service';

@Component({
	selector: 'app-toast',
	templateUrl: './toast.component.html',
	styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

	constructor(public toastService: ToastService) { }

	isTemplate(toast: any) {
		return toast.textOrTpl instanceof TemplateRef;
	}
}
