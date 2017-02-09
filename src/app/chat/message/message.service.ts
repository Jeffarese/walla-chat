import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFire} from "angularfire2";

@Injectable()
export class MessageService {

  constructor(private af: AngularFire) { }

  public loadMessages(): Observable<any> {
    return this.af.database.list('messages');
  }

}
