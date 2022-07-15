import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: Set<File> = new Set;
  progress = 0;

  constructor(private service: UploadFileService) { }

  ngOnInit(): void {
  }

  choosedFile(e: Event) {
    const selectedFiles = Array.from((<FileList>(<HTMLInputElement>e.target).files));
    const filesName = selectedFiles.map(f => {
      this.files.add(f);
      return f.name;
    }).join(', ');
    (<any>document.getElementById('chooseFile')).innerHTML = filesName;
  }

  onSubmit() {
    if (this.files.size > 0) {
      this.service.upload(this.files, '/api/upload')
        .subscribe((res: HttpEvent<Object>) => {
          if (res.type === HttpEventType.UploadProgress) {
            this.progress = Math.trunc(100 * res.loaded / (res.total || 1));
          } else if (res.type === HttpEventType.Response) {
            this.progress = 0;
            console.log('Sucesso!');
          }
        });
    }
  }

}
