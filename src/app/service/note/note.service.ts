import { Injectable } from '@angular/core';
import { Note } from '../../model/note.model'
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/do'


import { tap } from "rxjs/operators";
import { catchError } from "rxjs/operators";

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private _URL = "/servicio/api-notes-app"
  constructor(
    private http: HttpClient,
  ) { }

  public getNotes(): Observable<any> {
    return this.http.get(this._URL + "/notes")
      .pipe(
        map(results => {         
          return results;
        })
      );
  }

  public insertNote(note: Note) {    
    var json_object = {
      title: note.title,
      information: note.information,
      author: note.author

    }
    return this.http.post(this._URL + "/new-note", json_object, {})
      .pipe(
        map(results => {
          return results;
        })
      );
  }

  public deleteNote(id: String) {    
    var json_object = {
      _id: id
    }
    return this.http.post(this._URL + "/delete-note", json_object, {})
      .pipe(
        map(results => {
          return results;
        })
      );
  }

  public updateNote(note: Note) {    
    var json_object = {
      idNote: { _id: note._id },
      params: {
        title: note.title,
        information: note.information,
        author: note.author
      }
    }
    return this.http.post(this._URL + "/update-note", json_object, {})
      .pipe(
        map(results => {
          return results;
        })
      );
  }

}
