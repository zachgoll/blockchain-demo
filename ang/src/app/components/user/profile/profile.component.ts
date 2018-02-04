import { TxSubmit } from './../../blockchain-demo/tx-submit.model';
import { User } from './../user.model';
import { QueryService } from './../../../services/query.service';
import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  usersWithPics: {username: string, id: number, picture_url: string}[] = [];
  image: string;
  display = '';
  fileReady = false;
  uploaded = '';
  uploadMessage = '';
  questions: any;
  addingCompany = false;
  addingAdmin = false;
  companyAlert = false;
  adminAlert = false;
  blockchainCleared = false;
  public uploader: FileUploader = new FileUploader({url: '/upload', itemAlias: 'photo'});

  @Output() profilePicChanged = new EventEmitter();
  @ViewChild('question') questionForm: NgForm;
  @ViewChild('company') companyForm: NgForm;
  @ViewChild('admin') adminForm: NgForm;

  constructor(private http: HttpClient, private authService: AuthService, private queryService: QueryService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile) => {
      if (profile.user.admin === true) {
        let usr = JSON.parse(localStorage.getItem('user'));
        usr.admin = true;
        localStorage.setItem('user', JSON.stringify(usr));
        this.user = usr;
      }
    });
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loadUsers();

    this.updateQuestions();

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      this.fileReady = true;
      this.uploadMessage = '';
      this.uploader.uploadAll();
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

      const res = JSON.parse(response);

      if (!res.success) {
        this.fileReady = false;
        this.uploader.clearQueue();
        this.uploadMessage = res.msg;
      } else {
        // Save user picture to local storage
        let usr = JSON.parse(localStorage.getItem('user'));
        this.queryService.updateUserPic(usr.username, {picture: res.file}).subscribe();
        usr.picture_url = res.file;
        localStorage.setItem('user', JSON.stringify(usr));
        this.user = usr;
        this.authService.picture_url = res.file;
        setTimeout(() => {
          this.fileReady = false;
          this.uploadMessage = res.msg;
          this.uploader.clearQueue();
        }, 1000);
      }
    };
  }

  loadUsers() {
    this.authService.loadUserProfiles().subscribe((users) => {
      this.usersWithPics = users;
    });
  }

  updateQuestions() {
    this.queryService.getUserQuestions().subscribe((questions) => {
      this.questions = questions;
    });
  }

  deleteQuestion(index) {
    const questionId = this.questions[index].id;

    this.queryService.deleteQuestion(questionId).subscribe(() => {
      this.updateQuestions();
    });
  }

  resetBlockchain() {
    this.queryService.resetBlockchain().subscribe(() => {
      this.blockchainCleared = true;
      setTimeout(() => {
        this.blockchainCleared = false;
      }, 6000);
    });
  }

  onQuestionSubmit() {

    const id = this.user.id;
    const question = { question: this.questionForm.value.question };
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    this.http.post('/api/v1/' + id + '/question', question, {headers: headers})
      .subscribe(() => {
        this.updateQuestions();
        this.questionForm.reset();
      });

  }

  onCompanySubmit() {
    const companyName = this.companyForm.value.companyName;
    const sessionId = this.companyForm.value.sessionId;

    const company = {
      secret_phrase: sessionId,
      name: companyName
    };

    this.queryService.addCompany(company).subscribe(() => {
      this.companyAlert = true;
      setTimeout(() => {
        this.companyAlert = false;
      }, 6000);
      this.addingCompany = false;
    });
  }

  onAdminSubmit() {
    const userId = this.adminForm.value.selectedUser.id;
    this.queryService.addAdmin(userId).subscribe(() => {
      this.adminAlert = true;
      setTimeout(() => {
        this.adminAlert = false;
      }, 6000);
      this.addingAdmin = false;
    });
  }

  emitUploader() {
    console.log(this.uploader);
  }

  changeStyle($event) {
    this.display = $event.type === 'mouseover' ? 'db' : '';
  }

  search = (text$: Observable<string>) =>
  text$
    .debounceTime(200)
    .map(term => term === '' ? []
      : this.usersWithPics.filter(v => v.username.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  formatter = (x: {username: string}) => x.username;

}
