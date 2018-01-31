import { User } from './../user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QueryService } from '../../../services/query.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild ('login') loginForm: NgForm;
  username: String;
  password: String;

  constructor(private authService: AuthService, private router: Router, private query: QueryService) { }

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
          this.authService.getProfile().subscribe((profile: any) => {
            if (profile.user.picture_url) {
              this.authService.picture_url = profile.user.picture_url;
            }
            this.authService.currentUser = profile.user;
            this.router.navigate(['/']);
          }, (err) => {
            console.log(err);
          });
        } else {
          this.router.navigate(['/register']);
        }
      });

    this.loginForm.reset();
  }

}
