import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MessageService } from './services/message/message.service';
import { NotificationService } from './services/notifications/notification.service';
import { SharedService } from './shared/services/shared.service';
import { Routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    MessageService,
    NotificationService,
    SharedService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
