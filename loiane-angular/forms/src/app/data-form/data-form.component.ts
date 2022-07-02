import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { EstadosBr } from '../shared/models/estados-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: Observable<EstadosBr[]> = of();
  cargos: any[] = [];
  tecnologias: any[] = [];
  newsletter: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropDownService: DropdownService,
    private consultaCepService: ConsultaCepService) {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null)
    //   })
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null, Validators.required],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: [null]
    });
  }

  setCargo() {
    this.formulario.get('cargo')?.patchValue(
      { nome: 'Dev', sigla: 'Pl', descricao: 'Dev Pleno' }
    );
  }

  setTecnologias() {
    this.formulario.get('tecnologias')?.patchValue(['nest', 'vue']);
  }

  comparaCargos(ob1: any, ob2: any) {
    if (ob1 && ob2) {
      if (ob1.sigla === ob2.sigla) return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.estados = this.dropDownService.getEstadosBR();
    this.cargos = this.dropDownService.getCargos();
    this.tecnologias = this.dropDownService.getTecnologias();
    this.newsletter = this.dropDownService.getNewsletter();
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep')?.value;
    if (cep != null && cep !== '') {
      cep = cep.replace(/\D/g, '');
      this.consultaCepService.consultaCEP(cep).subscribe(data => {
        console.log(data);
        this.popularForm(data);
      });
    }
  }

  popularForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      this.http.post('//httpbin.org/post', JSON.stringify(this.formulario.value))
        .subscribe({
          next: (response) => {
            console.log(response);
            console.log(this.formulario);
            //this.formulario.reset();
          },
          error: (error) => {
            console.log(error);
            alert(error.message);
          }
        });
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).map(fieldName => {
      const control = formGroup.get(fieldName);
      control?.markAsDirty();
      if (control instanceof FormGroup) this.verificaValidacoesForm(control);
    });
  }

  isInvalidAndTouched(fieldName: string): boolean {
    let field = this.formulario.get(fieldName);
    return <boolean>(field?.invalid && (field?.touched || field?.dirty));
  }

  hasErrorAndFeedback(fieldName: string) {
    return {
      'has-error': this.isInvalidAndTouched(fieldName),
      'has-feedback': this.isInvalidAndTouched(fieldName),
    };
  }

}
