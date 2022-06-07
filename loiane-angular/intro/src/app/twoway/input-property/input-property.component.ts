import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  inputs: ['likes:curtidas']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso = '';
  likes = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
