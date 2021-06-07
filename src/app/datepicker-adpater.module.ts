import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCustomDateParserFormatter } from './custon-format';

import { NgbdDatepickerAdapter } from './datepicker-adapter';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [NgbdDatepickerAdapter],
  exports: [NgbdDatepickerAdapter],
  bootstrap: [NgbdDatepickerAdapter],

  providers: [
    {
      provide: NgbDateParserFormatter,
      useValue: new NgbCustomDateParserFormatter('DD/MM/YYYY')
    }
  ]
})
export class NgbdDatepickerAdapterModule {}
