import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AuFourPipe } from '../au-four.pipe';
import { Chocolatine } from '../chocolatine';
import { BoulangerieService } from '../boulangerie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chocolatine',
  standalone: true,
  imports: [CommonModule, AuFourPipe],
  templateUrl: './chocolatine.component.html',
  styleUrl: './chocolatine.component.css',
  //providers: [BoulangerieService],
})
export class ChocolatineComponent implements OnDestroy, OnInit {
  @Input() qualite: string = 'ko';
  @Output() aEteMange: EventEmitter<number> = new EventEmitter();

  obs$: Observable<Chocolatine>;
  count() {
    return this.data.filter((u) => {
      return u.name.indexOf('u') !== -1;
    }).length;
  }
  prix = 1.2;
  id;
  data: any[] = [];

  choco: Chocolatine = {
    cuisson: 'pas cuit',
    prix: 0,
  };

  constructor() {
    this.id = setInterval(() => {
      this.prix += 0.1;
      this.aEteMange.emit(123);
    }, 1000);
    this.obs$ = inject(BoulangerieService).tuyau$.asObservable();
  }

  async ngOnInit() {
    console.log('Init');
    this.data = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();
  }

  giveMeAString() {
    return 'hello';
  }

  ngOnDestroy(): void {
    console.log('je pars');
    clearInterval(this.id);
  }

  doSomething() {
    console.log('lesgo');
    this.prix = 10;
  }
}
