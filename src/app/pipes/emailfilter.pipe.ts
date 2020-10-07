import { Pipe, PipeTransform } from '@angular/core';
import { Email } from '../interfaces/email';

@Pipe({name: 'emailfilter'})
export class EmailfilterPipe implements PipeTransform {

  transform(emailList: Array<Email>, search: string): Array<Email> {
    return null;
  }

}
