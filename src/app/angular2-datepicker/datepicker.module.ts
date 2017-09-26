import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePicker } from './datepicker.component';

@NgModule({
    imports: [CommonModule],
    declarations: [DatePicker],
    exports: [DatePicker]
})
export class DatePickerModule{

}