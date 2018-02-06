import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

import { MessageData } from '../../services/message/message.data';
import { MessageService } from '../../services/message/message.service';
import { NotificationData } from '../../services/notifications/notification.data';
import { NotificationService } from '../../services/notifications/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss'
  ]
})
export class HeaderComponent implements OnInit {
  messagesData: Array<MessageData>;
  notificationsData: Array<NotificationData>;
  tasksData: Array<any>;
  maThemeModel = 'green';

  setTheme() {
    this.sharedService.setTheme(this.maThemeModel);
  }

  constructor(
    private sharedService: SharedService,
    private messageService: MessageService,
    private notificationService: NotificationService
  ) {
    sharedService.maThemeSubject.subscribe((value) => {
      this.maThemeModel = value;
    });

    this.tasksData = [
      {
        name: 'HTML5 Validation Report',
        completed: 95,
        color: ''
      }, {
        name: 'Google Chrome Extension',
        completed: '80',
        color: 'success'
      }, {
        name: 'Social Intranet Projects',
        completed: '20',
        color: 'warning'
      }, {
        name: 'Bootstrap Admin Template',
        completed: '60',
        color: 'danger'
      }, {
        name: 'Youtube Client App',
        completed: '80',
        color: 'info'
      }
    ];
  }

  ngOnInit() {
    this.getMessages();
    this.getNotifications();
  }

  getMessages(): void {
    this.messageService.getMessages()
      .subscribe(data => this.messagesData = data);
  }

  getNotifications(): void {
    this.notificationService.getNotifications()
      .subscribe(data => this.notificationsData = data);
  }
}
