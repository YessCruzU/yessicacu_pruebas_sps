import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service'
import { User } from 'src/app/model/user.model'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  lstUsers: User[];
  userForm: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.lstUsers = new Array<User>();
    this.userForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.doGet();
    this.form();
  }

  form() {
    this.userForm = new FormGroup({
      user: new FormControl('', Validators.required)
    });
  }

  doGet() {
    this.userService.getUser().subscribe(
      res => {
        this.lstUsers = res;
        this.userService.lstUsers = this.lstUsers;        
      },
      err => console.log(err)
    );
  }

  onSubmit() {
    this.userService.insertUser(this.userForm.value.user).subscribe(
      res => {    
        this.ngOnInit();
      },
      err => console.log(err)
    );
  }

}
