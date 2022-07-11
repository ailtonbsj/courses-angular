import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, of, catchError, EMPTY, Subject } from 'rxjs';
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
    this.selectedCurso = id;
    this.deleteModalRef = this.modalService
      .show(this.deleteModal, { class: 'modal-sm' });
  }

  onConfirmDelete() {
    this.service.remove(this.selectedCurso).subscribe({
      next: () => {
        this.deleteModalRef.hide();
        this.loadCursos();
      },
      error: e => this.alertService.showAlertDanger(e.message)
    });
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
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
