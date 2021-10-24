import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'basic'
})
export class BasicPipe implements PipeTransform {


  transform(value: Product[], filterText?:string): Product[] {
    filterText =filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
}
