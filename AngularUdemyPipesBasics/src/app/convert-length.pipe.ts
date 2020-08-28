import { Pipe, PipeTransform } from '@angular/core';
import pqm from "pqm";

@Pipe({
  name: 'convertLength'
})
export class ConvertLengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let lengthInInches = parseInt(value);
    if (!isNaN(lengthInInches)) {
      return pqm.quantity(value,"in").in("cm");
    } else {
      return value;
    }
  }

}
