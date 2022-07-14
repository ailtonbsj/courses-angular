import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UploadFileService } from './upload-file.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    UploadFileRoutingModule,
    HttpClientModule
  ],
  providers: [
    UploadFileService
  ]
})
export class UploadFileModule { }
