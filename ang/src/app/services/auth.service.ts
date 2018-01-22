import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  image = 'http://www.tadamun.so/wp-content/uploads/2016/09/blank-avatar.png';

  constructor(private http: HttpClient) { }

  registerUser(user){
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
    return this.http.get('/users/profile', {headers: headers});
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
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  // Log out logic
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
