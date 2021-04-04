import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note/note.service'
import { Note } from 'src/app/model/note.model'
//import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormUserComponent } from 'src/app/components/form-user/form-user.component'


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  lstNotes: Note[];
  noteTemp: Note;
  constructor(
    private noteService: NoteService,
    public dialog: MatDialog
  ) {
    this.lstNotes = new Array<Note>();
    this.noteTemp = {};

  }

  ngOnInit() {  
    this.doGet();
  }

  doGet() {
    this.noteService.getNotes().subscribe(
      res => {
        this.lstNotes = res;
      },
      err => console.log(err)
    );
  }

  doInsert(note: Note) {
    this.noteService.insertNote(note).subscribe(
      res => {
      },
      err => console.log(err)
    );
  }

  doUpdate(note: Note) {
    this.noteService.updateNote(note).subscribe(
      res => {
        this.ngOnInit()
      },
      err => console.log(err)
    );

  }


  doDelete(note: Note) {
    this.noteService.deleteNote(String(note._id)).subscribe(
      res => {
        this.ngOnInit()
      },
      err => console.log(err)
    );
  }


  openDialog(data: any): void {
    const dialogRef = this.dialog.open(FormUserComponent, {
      width: '400px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {     
      result._id ? this.doUpdate(result) : result.author ? this.doInsert(result) : null;
      this.ngOnInit()
    });
  }

}

