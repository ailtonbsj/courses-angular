import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    let values: string[] = value.split(' ');
    return values.reduce(
      (acc, cur) => acc + ' ' + this.capitalize(cur),
      this.capitalize(values[0])
    );
  }

  capitalize(value: string) {
    return (
      value.substring(0, 1).toUpperCase() + value.substring(1).toLowerCase()
    );
  }
}
