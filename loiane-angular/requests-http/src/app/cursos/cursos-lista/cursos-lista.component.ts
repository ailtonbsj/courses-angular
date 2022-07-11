import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, of, catchError, EMPTY, Subject, take, switchMap } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  cursos$: Observable<Curso[]> = of();
  error$ = new Subject<boolean>();
  selectedCurso: any;

  constructor(
    private service: CursosService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {
  }

  deleteModalRef: BsModalRef = new BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  ngOnInit(): void {
    this.loadCursos();
  }

  remove(id: number) {
    const res$ = this.alertService.showConfirm('Confirmação','Tem certeza que quer excluir?');
    res$.pipe(
      take(1),
      switchMap(res => res ? this.service.remove(id): EMPTY)
    ).subscribe({
      next: () => this.loadCursos(),
      error: e => this.alertService.showAlertDanger(e.message)
    });
  }

  loadCursos() {
    this.error$.next(false);
    this.cursos$ = this.service.list().pipe(
      catchError(error => {
        console.log(error);
        //this.error$.next(true);
        this.handleError();
        return EMPTY;
      })
    );
  }

  handleError() {
    this.alertService.showAlertDanger('Error ao carregar cursos. Tente novamente mais tarde.');
  }

  edit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

}
