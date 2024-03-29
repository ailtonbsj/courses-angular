import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css']
})
export class ErrorMsgComponent implements OnInit {

  @Input() control: AbstractControl | null = null;
  @Input() label: string = '';

  constructor() { }

  ngOnInit() {
  }

  get errorMessage() {
    for(const propertyName in this.control?.errors) {
      console.log(this.control?.touched);
      if(this.control?.errors.hasOwnProperty(propertyName) && this.control.touched) {

        return FormValidations.getErrorMsg(this.label, propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
