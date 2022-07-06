import { FormControl, FormGroup } from "@angular/forms";

export class FormValidations {
  static equalsTo(otherField: string) {
    const validator = (formControl: FormControl) => {
      if (otherField == null) throw new Error('É necessário informar um campo');
      if(!formControl.root || !(<FormGroup>formControl.root).controls) return null;
      const field = (<FormGroup>formControl.root).get(otherField);
      if (!field) throw new Error('É necessário informar um campo válido.');
      const field1 = field.value === null ? '' : field.value;
      const field2 = formControl.value === null ? '': formControl.value;
      if (field1 !== field2) return { equalsTo: otherField };
      return null;
    }
    return validator;
  }

  static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
    const config: any = {
      'required' : `${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      'cepInvalido': 'CEP Inválido.'
    }
    return config[validatorName];
  }
}
