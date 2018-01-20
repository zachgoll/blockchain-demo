import { NgForm } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild ('login') loginForm: NgForm;
  username: String;
  password: String;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
/*
  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    };

    this.authService.loginUser(user).subscribe((user) => {
      if (user.success) {
        this.authService.storeUserData(user.token, user.user);
      } else {
        console.log('did not login');
      }
    });
  }
  */

}
