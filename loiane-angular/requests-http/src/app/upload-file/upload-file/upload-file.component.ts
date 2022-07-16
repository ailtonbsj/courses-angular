import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { filterResponse, uploadProgress } from '../../shared/rxjs-operator'

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
        .pipe(
          uploadProgress(progress => this.progress = progress),
          filterResponse()
        )
        .subscribe((res) => this.progress = 0);
    }
  }

  downloadPDF() {
    this.service.download('/api/downloadPDF').subscribe((res: any) => {
      this.service.handleFile(res, 'report.pdf');
    });
  }

  downloadXLS() {
    this.service.download('/api/downloadXLS').subscribe((res: any) => {
      this.service.handleFile(res, 'report.xlsx');
    });
  }

}
