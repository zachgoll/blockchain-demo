import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('register') registerForm: NgForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit() {

    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;

    const user = {
      f_name: this.registerForm.value.f_name,
      l_name: this.registerForm.value.l_name,
      username: username,
      password: password,
      session: this.registerForm.value.session
    };

    // Register user with backend
    this.authService.registerUser(user).subscribe((data) => {
      if (data) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
      }
    });
    this.registerForm.reset();

  }

}
