import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActionComponent } from './components/action/action.component';
import { ProgressComponent } from './components/progress/progress.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ToastComponent } from './components/toast/toast.component';
import { ProgressCancelComponent } from './components/progress-cancel/progress-cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    ProgressComponent,
    NotificationComponent,
    ToastComponent,
    ProgressCancelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
