import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'rxjs/internal-compatibility'

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

  transform(value: any, size: number = 1): any[][] {
    if (!isArray(value)) {
      return value;
    }

    let result = [];
    for (let i = 0; i < value.length; i += size) {
      result.push(value.slice(i, i + size))
    }
    return result;
  }

}
