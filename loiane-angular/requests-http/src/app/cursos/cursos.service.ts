import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { environment } from 'src/environments/environment';
import { delay, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}/cursos`;

  constructor(private http: HttpClient) { }

  list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.API).pipe(
      delay(1000)
    );
  }

  private create(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.API, curso).pipe(take(1));
  }

  private update(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  save(curso: Curso): Observable<Curso> {
    if(curso.id) return this.update(curso);
    return this.create(curso);
  }

  getById(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }

  remove(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
