import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  estados: EstadosBr[] | null = null;

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
      })
    });
  }

  ngOnInit(): void {
    this.dropDownService.getEstadosBR().subscribe(dados => {
      this.estados = dados;
    });
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
