import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodicTableRouting } from './periodic-table.routing';
import { PeriodicTableComponent } from './periodic-table.component';

@NgModule({
  declarations: [PeriodicTableComponent],
  imports: [CommonModule, PeriodicTableRouting],
})
export class PeriodicTableModule {}
