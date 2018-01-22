import { NgForm } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild ('login') loginForm: NgForm;
  username: String;
  password: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.authService.loginUser(user).subscribe((userObj: {success: boolean, token: string, user: {id: number, username: string}}) => {
        if (userObj.success) {
          this.authService.storeUserData(userObj.token, userObj.user);
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/register']);
        }
      });

    this.loginForm.reset();
  }

}
