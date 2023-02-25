import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { periodicTable } from './js/periodic-table';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodicTableComponent implements AfterViewInit, OnDestroy {
  public ngAfterViewInit(): void {
    document.getElementById('body')?.classList.add('background-periodic-table');
    this.execute();
  }

  public execute(): void {
    periodicTable();
  }

  public ngOnDestroy(): void {
    document.getElementById('body')?.classList.remove('background-periodic-table');
  }
}
