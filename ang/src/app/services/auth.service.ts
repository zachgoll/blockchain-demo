import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { User } from './../components/user/user.model';

@Injectable()
export class AuthService {

  authToken: any;
  currentUser: User;
  user = JSON.parse(localStorage.getItem('user'));
  picture_url = 'http://www.tadamun.so/wp-content/uploads/2016/09/blank-avatar.png';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    // Return an observable that can be subscribed to
    return this.http.post('/users/new', user, {headers: headers});
  }

  // Make POST request to authenticate
  loginUser(user) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    // Return an observable that can be subscribed to
    return this.http.post('/users/authenticate', user, {headers: headers});
  }

  // Allow someone on unauthorized routes
  getProfile() {
    this.loadToken();
    const headers = new HttpHeaders({
      'Authorization': this.authToken,
      'Content-type': 'application/json'
    });
    // Return an observable that can be subscribed to
    return this.http.get<any>('/users/profile', {headers: headers});
  }

  // Allow edits to a user
  updateUserPicture(username, picture) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    return this.http.put('/api/v1/' + username + '/image', picture, {headers: headers});
  }

  // Store logged in user in localStorage
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);

    // Local storage only stores strings, so we need to stringify the Json user object
    localStorage.setItem('user', JSON.stringify(user));

    // Set auth service globals so we can pass around our app
    this.authToken = token;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loadUserProfiles() {
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    return this.http.get<User[]>('/api/v1/users', {headers: headers})
      .map(
        (response) => {
          let users = [];
          response.forEach((user) => {
            users.push({username: user.username, id: user.id, picture_url: user.picture_url});
          });
          return users;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  // Log out logic
  logout() {
    this.authToken = null;
    this.currentUser = null;
    localStorage.clear();
    this.router.navigate(['/']);
    this.picture_url = 'http://www.tadamun.so/wp-content/uploads/2016/09/blank-avatar.png';
  }

}
