import { Pipe, PipeTransform } from '@angular/core';
import { Chocolatine } from './chocolatine';

@Pipe({
  name: 'auFour',
  standalone: true,
})
export class AuFourPipe implements PipeTransform {
  transform(value: Chocolatine): Chocolatine {
    return {
      cuisson: 'bien cuit',
      prix: value.prix,
    };
  }
}
