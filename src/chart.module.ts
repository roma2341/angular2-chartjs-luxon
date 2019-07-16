import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import ChartAdapterLuxon from 'chartjs-adapter-luxon';

@NgModule({
  declarations: [ ChartComponent ],
  exports: [ ChartComponent ]
})
export class ChartModule {
  constructor() { }
}
