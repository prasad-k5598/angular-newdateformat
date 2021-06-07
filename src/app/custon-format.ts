import { Injectable } from '@angular/core';
import {
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Injectable()
export class NgbCustomDateParserFormatter extends NgbDateParserFormatter {
  constructor(private momentFormat: string) {
    super();
  }

  parse(value: string): NgbDateStruct {
    if (!value) {
      return null;
    }
    const d = moment(value, this.momentFormat);
    return d.isValid()
      ? { year: d.year(), month: d.month() + 1, day: d.date() }
      : null;
  }

  format(date: NgbDateStruct): string {
    if (date === null) {
      return null;
    }
    const d = moment({ year: date.year, month: date.month, day: date.day });
    return d.isValid() ? d.format(this.momentFormat) : '';
  }
}
