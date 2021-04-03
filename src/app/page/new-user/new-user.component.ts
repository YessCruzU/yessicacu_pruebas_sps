import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/service/user/user.service'
import { User } from 'src/app/model/user.model'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  lstUsers: User[];
  nameUser: String;
  constructor(
   private userService: UserService
  ) {
    this.lstUsers = new Array<User>();
    this.nameUser="";
  }
  ngOnInit() {

    this.doGet();
  }
  doGet(){
    this.userService.getUser().subscribe(
      res => {
        this.lstUsers = res;  
        this.userService.lstUsers = this.lstUsers;
        console.log(this.lstUsers);
        console.log(this.userService.lstUsers);
              
      },
      err =>console.log(err)
    );
  }

  doInsert(user: String){
    

    this.userService.insertUser(user).subscribe(
      res => {
       
        console.log(res);
              
      },
      err =>console.log(err)
    );
  }

  OnInput(value:String) {
    this.nameUser = value;
    console.log(this.nameUser)
   }

}
