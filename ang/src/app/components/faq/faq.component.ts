import { QueryService } from './../../services/query.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private query: QueryService) { }

  sessionQuestions = [];

  user: any;
  loaded = false;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getSessionQuestions();
    this.wait();
  }

  wait() {
    this.loaded = false;
    setTimeout(() => {
      this.loaded = true;
    }, 1000);
  }
  // if (this.txs.findIndex(el => el.id === element.id) === -1)
  getSessionQuestions() {
    this.wait();
    this.sessionQuestions = [];
    this.query.getQuestionSubs().subscribe((subs) => {
      this.query.getSessionQuestions(this.user.session).subscribe((questions) => {
        questions.forEach((q) => {
          if (subs) {
            if (subs.findIndex(s => s.user_id == this.user.id && s.question_id == q.id) !== -1) {
              q.subbed = true;
            } else {
              q.subbed = false;
            }
          }
          this.sessionQuestions.push(q);
        });
      });
    });
  }

  voteSession(index) {
    const questionId = this.sessionQuestions[index].id;
    this.query.incrementQuestion(questionId).subscribe(() => {
      this.query.subQuestion(questionId).subscribe(() => {
        this.sessionQuestions[index].upvotes++;
        this.sessionQuestions[index].subbed = true;
      });
    });
  }

  unsub(index) {
    const questionId = this.sessionQuestions[index].id;
    this.query.decrementQuestion(questionId).subscribe(() => {
      this.query.unsubQuestion(questionId).subscribe((res) => {
        console.log(res);
        this.sessionQuestions[index].upvotes--;
        this.sessionQuestions[index].subbed = false;
      });
    });
  }

}
