import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angularPipe'
})
export class AngularPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if(args.length > 0) {
      const data = args[0];
      return value*data;
    } else {
      return value;
    }
  }
}
