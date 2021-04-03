import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserService} from 'src/app/service/user/user.service'
import {NoteService} from 'src/app/service/note/note.service'
import { User } from 'src/app/model/user.model'
import { Note } from 'src/app/model/note.model'
import { FormBuilder, FormGroup,Validators,FormControl } from "@angular/forms";
import { of } from "rxjs";


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  lstUsers : User[]; 
  noteForm: FormGroup;
  
 
  
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<FormUserComponent>,
     private userService:UserService,
     private noteService:NoteService,
     private formBuilder: FormBuilder) {
      this.lstUsers = new Array<User>();  
      
       this.noteForm = new FormGroup({
        title: new FormControl(''),
        author: new FormControl(''),
        information: new FormControl('')
     });
    
      }

/* noteForm = this.formBuilder.group({   
    title: ['', Validators.required],
    author: '',
    information:''
  });*/

  ngOnInit() {
    this.doGetUser()
   
    
  }

  onSubmit(){

    console.log(this.noteForm.valid);
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.warn('note', this.noteForm.value);
    this.noteService.insertNote(this.noteForm.value).subscribe(
      res => {       
        console.log(res); 
        this.noteForm.reset();  
        this.closeDialog();
                  
      },
      err =>console.log(err)
    );
    

    //this.checkoutForm.reset();
  }

 



  closeDialog() {
    this.dialogRef.close();
  }

  doGetUser(){
   this.userService.getUser().subscribe(
      res => {
        this.lstUsers = res;        
        console.log( this.lstUsers);              
      },
      err =>console.log(err)
    );
  }

}
