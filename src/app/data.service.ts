import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface HomesResponse {
  imageUrl: string;
  type: string;
  location: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  homes$ = new BehaviorSubject({ loading: true, data: [] });

  constructor(private http: HttpClient) {}

  getHomes(homeTypeFilters: string[], searchTerm: string) {
    this.homes$.next({ loading: true, data: [] });
    this.http
      .get<HomesResponse[]>('assets/homes.json')
      .pipe(
        delay(2000),
        map((homes) => {
          if (!homeTypeFilters.length) {
            return homes;
          }
          return homes.filter((home) => homeTypeFilters.includes(home.type));
        }),
        map((homes) => {
          if (!searchTerm) {
            return homes;
          }

          return homes.filter((home) =>
            home.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      )
      .subscribe((homes) => {
        this.homes$.next({ loading: false, data: homes });
      });
  }
}
