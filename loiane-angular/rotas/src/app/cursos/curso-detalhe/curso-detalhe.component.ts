import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number = 0;
  curso: any = '';
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router) {
    this.inscricao = this.route.params.subscribe(param => {
      this.id = param['id'];
    });
  }

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];
    this.curso = this.cursosService.getCurso(this.id);
    if (this.curso == null) {
      this.router.navigate(['cursos']);
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
