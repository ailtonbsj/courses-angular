import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, take } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: CursosService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const curso = this.route.snapshot.data['curso'];
    if (curso.id === 0) {
      curso.id = null;
      curso.nome = null;
    }

    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe({
        next: s => {
          let modal = this.alertService.showAlertSuccess('Salvo com sucesso!');
          modal?.pipe(take(1)).subscribe(() => this.router.navigate(['cursos']));
        },
        error: e => this.alertService.showAlertDanger(e)
      });
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  hasError(fieldName: string) {
    return this.form.get(fieldName)?.errors;
  }

  // updateForm(curso: Curso) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   });
  // }

  ngOnInit(): void {
    // this.route.params.pipe(
    //   map(params => params['id']),
    //   switchMap(id => this.service.getById(id))
    // ).subscribe(curso => this.updateForm(curso));
  }

}
