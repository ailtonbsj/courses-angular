import { HttpClient } from "@angular/common/http";
import { Observable, take } from "rxjs";

export class CrudService<T> {

  constructor(protected http: HttpClient, private API: string) { }

  list(): Observable<T[]> {
    return this.http.get<T[]>(this.API);
  }

  private create(record: T): Observable<T> {
    return this.http.post<T>(this.API, record).pipe(take(1));
  }

  private update(record: T): Observable<T> {
    return this.http.put<T>(`${this.API}/${(<any>record).id}`, record).pipe(take(1));
  }

  save(record: T): Observable<T> {
    if ((<any>record).id) return this.update(record);
    return this.create(record);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.API}/${id}`).pipe(take(1));
  }

  remove(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
