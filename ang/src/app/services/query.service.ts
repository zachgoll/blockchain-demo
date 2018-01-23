import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class QueryService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUserQuestions() {
    const id = this.authService.currentUser.id;
    return this.http.get('/api/v1/' + id + '/questions');
  }
}
