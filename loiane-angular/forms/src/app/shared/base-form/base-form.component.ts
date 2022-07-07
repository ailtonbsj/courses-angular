import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>',
})
export abstract class BaseFormComponent {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({});
  }

  abstract submit() : void;

  onSubmit() {
    if(this.formulario.valid) {
      this.submit();
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).map(fieldName => {
      const control = formGroup.get(fieldName);
      control?.markAsDirty();
      control?.markAsTouched();
      if (control instanceof FormGroup || control instanceof FormArray) this.verificaValidacoesForm(control);
    });
  }

  resetar() {
    this.formulario.reset();
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

  requiredMinCheckbox(min = 1) {
    return (formArray: AbstractControl) => {
      const totalChecked = (<FormArray>formArray).controls.filter(v => v.value).length;
      return totalChecked >= min ? null : { required: true };
    }
  }

}
