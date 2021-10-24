import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'basic'
})
export class BasicPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
