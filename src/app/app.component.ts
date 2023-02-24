import { animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { firstWork } from './files/first-work';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private _lastCanvas: any;

  public ngOnInit(): void {
    this.execute();
  }

  public execute() {
    this._lastCanvas = firstWork();
  }

  @HostListener('window:resize', ['$event'])
  public onResize() {
    this._lastCanvas.remove();
    this.execute();
  }

  public onDeleteCanvas() {
    this._lastCanvas.remove();
  }
}
