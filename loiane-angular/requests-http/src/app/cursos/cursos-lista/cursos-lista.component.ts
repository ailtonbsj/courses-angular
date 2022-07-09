import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, of, catchError, EMPTY, Subject } from 'rxjs';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  bsModalRef: BsModalRef = new BsModalRef;

  cursos$: Observable<Curso[]> = of();
  error$ = new Subject<boolean>();

  constructor(private service: CursosService,
    private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.loadCursos();
  }

  remove(id: number) {
    console.log(id);
    this.service.remove(id).subscribe(console.log);
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
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Error ao carregar cursos. Tente novamente mais tarde.';
  }

}
