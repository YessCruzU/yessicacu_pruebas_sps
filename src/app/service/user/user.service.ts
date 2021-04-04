import { Injectable } from '@angular/core';
import { User } from '../../model/user.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  lstUsers: User[];
  private URL = "/servicio/api-notes-app"

  constructor(
    private http: HttpClient,

  ) {
    this.lstUsers = new Array<User>();
  }

  public getUser(): Observable<any> {
    return this.http.get(this.URL + "/users")
      .pipe(
        map(results => {
          return results;
        })
      );
  }

  public insertUser(name: String) {
    var json_object = {
      name: name
    }
    return this.http.post(this.URL + "/new-user", json_object, {})
      .pipe(
        map(results => {
          return results;
        })
      );
  }

}
