import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {

  transform(value: string | undefined, limit: any): any {
    if (!value) {
      return null;
    }
    return value.substr(0, limit) + '...';
  }
}

