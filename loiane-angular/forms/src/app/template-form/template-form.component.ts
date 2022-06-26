import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {
  usuario = {
    nome: null,
    email: null,
    cep: null,
    numero: null,
    complemento: null,
  };

  isInvalidAndTouched(field: NgModel) {
    return field.invalid && field.touched;
  }

  hasErrorAndFeedback(field: NgModel) {
    return {
      'has-error': this.isInvalidAndTouched(field),
      'has-feedback': this.isInvalidAndTouched(field),
    };
  }

  onSubmit(form: NgForm) {
    this.http.post('//httpbin.org/post', JSON.stringify(form.value)).subscribe({
      next: response => {
        console.log(response);
        form.form.reset()
      },
      error: error =>  {
        alert(error.message)
      }
    });
  }

  constructor(private http: HttpClient) {}

  consultaCEP(val: any, form: NgForm) {
    let cep = (<HTMLInputElement>val).value.replace(/\D/g, '');
    if (cep != '') {
      let validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.http
          .get(`//viacep.com.br/ws/${cep}/json/`)
          .subscribe((response) => {
            this.popularForm(response, form);
          });
      }
    }
  }

  popularForm(dados: any, formulario: NgForm) {
    formulario.form.patchValue({
      endereco: {
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  ngOnInit(): void {}
}
