import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageData } from './message.data';
import { MESSAGES } from './message.data.mocks';

@Injectable()
export class MessageService {

  private serviceUrl = 'api/messages';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  getMessages(): Observable<MessageData[]> {
    return of(MESSAGES);
  }

}
