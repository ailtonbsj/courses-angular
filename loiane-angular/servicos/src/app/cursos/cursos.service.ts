import { EventEmitter, Injectable } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  cursos = ['Spring', 'Angular', 'Postgre'];

  constructor(private logService: LogService) {
    console.log('starting service...');

  }

  getCursos() {
    this.logService.logger('Obtendo lista de cursos!!');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.logger(`Adicionando curso ${curso} !!`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
