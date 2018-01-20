import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @ViewChild('register') registerForm: NgForm;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      f_name: this.registerForm.value.f_name,
      l_name: this.registerForm.value.l_name,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    };

    // Register user with backend
    this.authService.registerUser(user).subscribe((data) => {
      console.log(data);
    });

  }

}
