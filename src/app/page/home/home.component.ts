import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note.model';
import { NoteService } from 'src/app/service/note/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'notes-app-sps';
  lstNotes: Note[];

  constructor(public noteService:NoteService) { 
    this.lstNotes = new Array<Note>();
  }

  ngOnInit() {
   // this.doGetNotes();
  }


  

}
