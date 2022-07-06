import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, tap } from 'rxjs';

@Injectable()
export class VerificaEmailService {

  constructor(private http: HttpClient) { }

  verificarEmail(emailArg: string) {
    return this.http.get('assets/dados/verificarEmails.json')
      .pipe(
        map((dados: any) => dados.emails),
        map((dados: any[]) => dados.filter(v => v.email === emailArg)),
        map(dados => dados.length > 0),
        tap(console.log)
      );
  }

}
