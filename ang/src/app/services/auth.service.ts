import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    // Return an observable that can be subscribed to
    return this.http.post('/users/new', user, {headers: headers});
  }

  // Make POST request to authenticate
  loginUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    // Return an observable that can be subscribed to
    return this.http.post('/users/authenticate', user, {headers: headers});
  }

  // Allow someone on unauthorized routes
  getProfile(){
    let headers = new HttpHeaders();
    // We now have access to our token
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-type', 'application/json');

    // Return an observable that can be subscribed to
    return this.http.get('/users/profile', {headers: headers});
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
