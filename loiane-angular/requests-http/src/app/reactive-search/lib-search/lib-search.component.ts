import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, EMPTY, filter, map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  readonly fields = 'name,version';
  results$: Observable<any> = EMPTY;
  total = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges.pipe(
      map(val => val.trim()),
      filter(val => val.length > 2),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(value => this.http.get(this.SEARCH_URL, {
        params: {
          search: value,
          fields: this.fields
        }
      })),
      tap(val => console.log(val)),
      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
    );
  }

  onSearch() {
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {

      // const params = { search: value, fields: this.fields };

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', this.fields);

      this.results$ = this.http.get(this.SEARCH_URL, { params }).pipe(
        tap((res: any) => this.total = res.total),
        map((res: any) => res.results)
      );
    }
  }

}
