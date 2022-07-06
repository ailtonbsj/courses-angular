import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { FormValidations } from '../shared/form-validations';
import { EstadosBr } from '../shared/models/estados-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { VerificaEmailService } from './services/verifica-email.service';

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
  frameworks = ['Angular', 'React', 'Vue', 'jQuery'];
  frameworksCtrls: AbstractControl[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropDownService: DropdownService,
    private consultaCepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService) {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null)
    //   })
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, {
        validators: [
          Validators.required, Validators.email
        ],
        asyncValidators: [
          this.validarEmail.bind(this)
        ],
        updateOn: 'blur'
      }],
      confirmEmail: [null, [Validators.required, FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, this.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null, Validators.required],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: [null],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFramework()
    });

    this.frameworksCtrls = (<FormArray>this.formulario.get('frameworks')).controls;
  }

  ngOnInit(): void {
    this.estados = this.dropDownService.getEstadosBR();
    this.cargos = this.dropDownService.getCargos();
    this.tecnologias = this.dropDownService.getTecnologias();
    this.newsletter = this.dropDownService.getNewsletter();
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExist => emailExist ? { emailInvalido: true } : null));
  }

  requiredMinCheckbox(min = 1) {
    return (formArray: AbstractControl) => {
      const totalChecked = (<FormArray>formArray).controls.filter(v => v.value).length;
      return totalChecked >= min ? null : { required: true };
    }
  }

  cepValidator(control: FormControl) {
    const cep = control.value;
    if (cep && cep !== '') {
      const validcep = /^[0-9]{8}$/;
      return validcep.test(cep) ? null : { cepInvalido: true };
    }
    return null;
  }

  buildFramework() {
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, this.requiredMinCheckbox(1));
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
      const formSnap = Object.assign({}, this.formulario.value);
      const values = Object.assign(formSnap, {
        frameworks: formSnap.frameworks.map(
          (v: any, i: any) => v ? this.frameworks[i] : null).filter((v: any) => v)
      });
      this.http.post('//httpbin.org/post', JSON.stringify(values))
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

  cpfIsRequired(fieldName: string): boolean {
    let field = this.formulario.get(fieldName);
    return <boolean>(field?.hasError('required') && (field?.touched || field?.dirty));
  }

  hasErrorAndFeedback(fieldName: string) {
    return {
      'has-error': this.isInvalidAndTouched(fieldName),
      'has-feedback': this.isInvalidAndTouched(fieldName),
    };
  }

}
