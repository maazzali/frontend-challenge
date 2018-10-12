import { Pipe, PipeTransform } from '@angular/core';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Pipe({name: 'timestamp'})
export class TimeStampPipe implements PipeTransform {
  transform(value: string, option: string) {
    const newDate = new Date(value);
    switch (option) {
      case 'day': {
        return newDate.getDate();
      }
      case 'month': {
        return months[newDate.getMonth()];
      }
      default: {
        return newDate;
      }
    }
  }
}
