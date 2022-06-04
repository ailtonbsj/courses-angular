import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  portalName: string;
  cursos: string[] = [];

  constructor(private cursosService: CursosService) {
    this.portalName = 'http://loiane.training';
    this.cursos = cursosService.getCursos();
  }

  ngOnInit(): void {
  }

}
