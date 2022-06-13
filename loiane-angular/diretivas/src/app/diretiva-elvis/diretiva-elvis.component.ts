import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-elvis',
  templateUrl: './diretiva-elvis.component.html',
  styleUrls: ['./diretiva-elvis.component.css']
})
export class DiretivaElvisComponent implements OnInit {

  task: any = {
    description: 'New task',
    responsable: null,
    father: null,
    mother: {
      name: 'Catrina'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
