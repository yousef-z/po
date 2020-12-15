import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'casePipe'
})
export class CasePipePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null
    return value;
  }

}
