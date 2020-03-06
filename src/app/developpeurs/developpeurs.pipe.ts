import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';
import {DatePipe} from '@angular/common';

@Pipe({name: 'creationDate'})
export class DeveloppeurCreationDatePipe implements PipeTransform {

  transform(value: Date): any {

    if (!value) {
      return 'à une date inconnue';
    }

/*
    if (moment(value).isSame(new Date(), 'day')) {
      return 'aujourd\'hui';
    } else if (moment(value).isSame(new Date(), 'week')) {
      return 'cette semaine';
    } else if (moment(value).isSame(new Date(), 'month')) {
      return 'ce mois-ci';
    }
*/

    const pipe = new DatePipe('fr-FR'); // Use your own locale
    return 'le ' + pipe.transform(value, 'longDate');
  }

}
