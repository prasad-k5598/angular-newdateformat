import { Component, Injectable, ViewChild } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepicker,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';

import { NgbCustomDateParserFormatter } from './custon-format';

/*
 * This Service handles how the date is represented in scripts i.e. ngModel.
 
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
  readonly DELIMITER = '-';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date
      ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
      : null;
  }
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '-';

  parse(value: string): NgbDateStruct {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
  }

  format(d: NgbDateStruct): string {
    if (d === null) {
      console.log('no date selected');
    }
    return [
      d.day < 10 ? '0' + d.day : d.day,
      d.month < 10 ? '0' + d.month : d.month,
      d.year
    ].join('-');
  }
}
*/
@Component({
  selector: 'ngbd-datepicker-adapter',
  templateUrl: './datepicker-adapter.html',

  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [
    {
      provide: NgbDateParserFormatter,
      useValue: new NgbCustomDateParserFormatter('DD/MM/YYYY')
    }
  ]
})
export class NgbdDatepickerAdapter {
  date: { year: number; month: number };
  @ViewChild('dp') dp: NgbDatepicker;

  constructor(
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>
  ) {}

  navigateEvent(event) {
    this.date = event.next;
  }
}
