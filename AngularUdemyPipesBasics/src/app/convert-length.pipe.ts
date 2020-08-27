import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertLength'
})
export class ConvertLengthPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
