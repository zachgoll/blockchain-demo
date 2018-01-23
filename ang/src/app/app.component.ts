import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile: {user: {picture_url: ''}}) => {
      if (profile.user.picture_url) {
        this.authService.image = profile.user.picture_url;
      }
      this.authService.currentUser = profile.user;
    }, (err) => {
      console.log(err);
    });
  }


}
