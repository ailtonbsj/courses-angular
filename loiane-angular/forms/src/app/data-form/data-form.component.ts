import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);

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
  }

  isInvalidAndTouched(fieldName: string): boolean {
    let field = this.formulario.get(fieldName);
    return <boolean>(field?.invalid && field?.touched);
  }

  hasErrorAndFeedback(fieldName: string) {
    return {
      'has-error': this.isInvalidAndTouched(fieldName),
      'has-feedback': this.isInvalidAndTouched(fieldName),
    };
  }

}
