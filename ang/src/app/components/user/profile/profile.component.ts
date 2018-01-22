import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

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
  public uploader: FileUploader = new FileUploader({url: '/upload', itemAlias: 'photo'});

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile: {user: {picture_url: ''}}) => {
      this.user = profile.user;
      if (profile.user.picture_url) {
        this.authService.image = profile.user.picture_url;
      }
    }, (err) => {
      this.user = {};
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
        this.authService.updateUserPicture(this.user.username, {picture: res.file}).subscribe((data) => console.log(data));
        setTimeout(() => {
          this.fileReady = false;
          this.uploadMessage = res.msg;
          this.authService.image = res.file;
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
