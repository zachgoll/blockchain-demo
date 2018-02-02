import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  sessionQuestions = [
    {question: 'When I am looking at a block explorer, what does the term gas mean?', subscriptions: 2, user: 'Joe'},
    {question: 'blah blah', subscriptions: 2, user: 'Joe'},
    {question: 'blah blah', subscriptions: 2, user: 'Joe'},
    {question: 'blah blah', subscriptions: 2, user: 'Joe'}
  ];

  topQuestions = [
    {question: 'When I am looking at a block explorer, what does the term gas mean?', subscriptions: 2, user: 'Joe'},
    {question: 'blah blah', subscriptions: 2, user: 'Joe'}
  ];

  ngOnInit() {
  }

}
