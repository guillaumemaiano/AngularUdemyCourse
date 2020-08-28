import { Pipe, PipeTransform } from '@angular/core';
import pqm from "pqm";

@Pipe({
  name: 'convertLength'
})
export class ConvertLengthPipe implements PipeTransform {

  transform(value: string, targetUnits: string, ...args: unknown[]): unknown {
    if (targetUnits != "cm") {
      return "unsupported unit";
    }
    let lengthInInches = parseInt(value);
    if (!isNaN(lengthInInches)) {
      return pqm.quantity(value,"in").in(targetUnits);
    } else {
      return value;
    }
  }

}
