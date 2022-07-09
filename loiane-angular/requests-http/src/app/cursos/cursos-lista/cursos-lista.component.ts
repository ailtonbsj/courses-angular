import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos$: Observable<Curso[]> = of();

  constructor(private service: CursosService) {
  }

  ngOnInit(): void {
    this.cursos$ = this.service.list();
  }

  remove(id: number) {
    console.log(id);
    this.service.remove(id).subscribe(console.log);
  }

}
