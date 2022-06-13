import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoSingletonService {

  emissor = new EventEmitter<string>();

  constructor() { }
}
