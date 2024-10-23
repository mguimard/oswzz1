import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Chocolatine } from './chocolatine';

@Injectable({
  providedIn: 'root',
})
export class BoulangerieService {
  tuyau$ = new Subject<Chocolatine>();

  constructor() {
    setInterval(() => {
      this.tuyau$.next({
        cuisson: 'bien cuit',
        prix: Math.random(),
      });
    }, 1000);
  }

  getChoco() {}
}
