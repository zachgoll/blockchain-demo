import { User } from './../user.model';
import { QueryService } from './../../../services/query.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  image: string;
  display = '';
  fileReady = false;
  uploaded = '';
  uploadMessage = '';
  questions: any;
  public uploader: FileUploader = new FileUploader({url: '/upload', itemAlias: 'photo'});

  @Output() profilePicChanged = new EventEmitter();

  constructor(private authService: AuthService, private queryService: QueryService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.queryService.getUserQuestions().subscribe((questions) => {
      this.questions = questions;
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      this.fileReady = true;
      this.uploadMessage = '';
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

  emitUploader() {
    console.log(this.uploader);
  }

  changeStyle($event) {
    this.display = $event.type === 'mouseover' ? 'db' : '';
  }

}
