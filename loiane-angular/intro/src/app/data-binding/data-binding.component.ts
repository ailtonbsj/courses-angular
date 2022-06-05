import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  urlImage = 'https://placekitten.com/100/100';

  getValue() {
    return 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
