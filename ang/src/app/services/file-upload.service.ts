import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FileUploadService {

  constructor(private http: HttpClient) { }

  postFile(fileToUpload: File) {
    const endpoint = '/users/image/new';
    const formData: FormData = new FormData();
    const headers = new HttpHeaders({'Content-type': 'multipart/form-data'});
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData, {headers: headers});
  }
}
