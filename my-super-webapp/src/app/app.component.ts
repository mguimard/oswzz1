import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChocolatineComponent } from './chocolatine/chocolatine.component';
import { FormsModule } from '@angular/forms';
import { BoulangerieService } from './boulangerie.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Chocolatine } from './chocolatine';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ChocolatineComponent,
    FormsModule,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-super-webapp';
  show = false;

  service_bis = inject(BoulangerieService);

  obs$: Observable<Chocolatine>;

  constructor(public service: BoulangerieService) {
    this.obs$ = service.tuyau$.asObservable();
  }

  showEvent(n: number) {
    inject(BoulangerieService).getChoco();
    console.log(n);
  }
}
