import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  currentValue: string = '';
  saveValue: any = '';
  saveMyValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn() {
    alert("Clicked");
  }

  onKeyPressedInput(event: KeyboardEvent) {
    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  saveValueInput(value: any) {
    this.saveValue = value.value;
  }

  saveMyInput(val: string){
    this.saveMyValue = val;
  }

}
