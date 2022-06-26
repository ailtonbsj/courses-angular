import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'field-control-error',
  templateUrl: './field-control-error.component.html',
  styleUrls: ['./field-control-error.component.css']
})
export class FieldControlErrorComponent implements OnInit {

  @Input() show: boolean | null = false;
  @Input() msgError: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
