import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];
  pagina: number = 1;

  constructor(
    private cursosService: CursosService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activedRoute.queryParams.subscribe(query => {
      if (query['pagina'] != null) this.pagina = query['pagina'];
    });
    this.cursos = this.cursosService.getCursos();
  }

  nextPage() {
    this.router.navigate(['cursos'], {
      queryParams: { 'pagina': ++this.pagina }
    });
  }

}
