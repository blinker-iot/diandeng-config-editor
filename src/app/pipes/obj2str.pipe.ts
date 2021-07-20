import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obj2str'
})
export class Obj2strPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return JSON.stringify(value);
  }

}
