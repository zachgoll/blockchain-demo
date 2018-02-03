import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('question') questionForm: NgForm;
  questionSuccess = false;
  questionError = false;

  constructor(private authService: AuthService, private http: HttpClient) { }

  user:any;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  onQuestionSubmit() {

    const id = this.user.id;

    const question = { question: this.questionForm.value.question };

    console.log(question);

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    this.http.post('/api/v1/' + id + '/question', question, {headers: headers})
      .subscribe((res) => {
        this.questionSuccess = true;
        this.questionForm.reset();
        setTimeout(() => { this.questionSuccess = false; }, 2000);
      },
      (err) => {
        console.log(err);
        this.questionError = true;
      });

  }

}
