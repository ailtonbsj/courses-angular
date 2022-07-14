import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  upload(files: Set<File>, url: string) {
    const formData = new FormData();
    files.forEach(f => formData.append('file', f, f.name));
    const req = new HttpRequest('POST', url, formData);
    return this.http.request(req);
  }
}
