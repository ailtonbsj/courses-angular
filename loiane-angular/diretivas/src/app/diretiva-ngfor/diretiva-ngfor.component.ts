import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  cursos = ["Angular", "Spring", "NextJS"];
  isRed = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    this.isRed = !this.isRed;
  }

}
