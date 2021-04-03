import { Component, OnInit } from '@angular/core';
import {NoteService} from 'src/app/service/note/note.service'
import {Note } from 'src/app/model/note.model'
//import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormUserComponent} from 'src/app/components/form-user/form-user.component'


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  lstNotes: Note[];
  animal: string;
  name: string;
  constructor(
   private noteService: NoteService,
   public dialog: MatDialog
  ) {
    this.lstNotes = new Array<Note>();
    this.animal= "vb";
    this.name= "gh";

   }

  ngOnInit() {
   /* this.noteService.getNotes().subscribe(
      items => {
        this.lstNotes = items;
        console.log(this.lstNotes)}
        
    );*/ 
    this.doGet();

  }

  doGet(){
    this.noteService.getNotes().subscribe(
      res => {
        this.lstNotes = res;        
      },
      err =>console.log(err)
    );
  }

  doInsert(){
    console.log('insert')
  }

  
  doDelete(note: Note){
   
      this.noteService.deleteNote(String(note._id)).subscribe(
        res => {       
          this.ngOnInit()
          console.log(res); 
          //this.noteForm.reset();  
          //this.closeDialog();
                    
        },
        err =>console.log(err)
      );
    }
  
 
  doUpdate(){
    console.log('delete')
  }

  openDialogs(){
   /* const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(FormUserComponent, dialogConfig);*/
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormUserComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      this.ngOnInit()
    });
  }

}

