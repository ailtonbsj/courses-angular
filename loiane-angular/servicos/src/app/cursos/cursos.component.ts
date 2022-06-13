import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];

  constructor(private cursosService: CursosService) {
  }

  ngOnInit(): void {
    CursosService.criouNovoCurso.subscribe(curso => this.cursos.push(curso));
    this.cursos = this.cursosService.getCursos();
  }

}
