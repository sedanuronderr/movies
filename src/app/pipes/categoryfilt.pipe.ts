import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryfilt'
})
export class CategoryfiltPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
