import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user/user.service'
import { NoteService } from 'src/app/service/note/note.service'
import { User } from 'src/app/model/user.model'
import { Note } from 'src/app/model/note.model'
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { of } from "rxjs";



@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  lstUsers: User[];
  noteForm: FormGroup;
  note: Note = {}
  editable: boolean = false;

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<FormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private noteService: NoteService,
    private formBuilder: FormBuilder) {
    this.noteForm = this.formBuilder.group({});
    this.lstUsers = new Array<User>();
    this.note = data;
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    this.doGetLstUser();
    this.initForm();
  }

  initForm() {
    this.noteForm = new FormGroup({
      _id: new FormControl(this.note._id ? this.note._id : ''),
      title: new FormControl(this.note.title, Validators.required),
      author: new FormControl(this.note.author, Validators.required),
      information: new FormControl(this.note.information, Validators.required)
    });
  }

  onSubmit() {
    this.dialogRef.close(this.noteForm.value);
  }

  close() {
    this.dialogRef.close()
  }

  doGetLstUser() {
    this.userService.getUser().subscribe(
      res => {
        this.lstUsers = res;
        if (this.lstUsers.length != 0) this.editable = true;
      },
      err => console.log(err)
    );
  }

}
