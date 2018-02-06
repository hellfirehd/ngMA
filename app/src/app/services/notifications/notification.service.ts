import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { NotificationData } from './notification.data';
import { NOTIFICATIONS } from './notification.data.mocks';

@Injectable()
export class NotificationService {

  private serviceUrl = 'api/messages';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getNotifications(): Observable<NotificationData[]> {
    return of(NOTIFICATIONS);
  }

}
