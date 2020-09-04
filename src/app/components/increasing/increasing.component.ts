import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styles: [],
})
export class IncreasingComponent implements OnInit {
  @Input('value') progress: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() valueExit: EventEmitter<number> = new EventEmitter();
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.valueExit.emit(100);
      return (this.progress = 100);
    }
    if (this.progress <= 0 && value < 0) {
      this.valueExit.emit(0);
      return (this.progress = 0);
    }
    this.progress = this.progress + value;
    this.valueExit.emit(this.progress);
  }
  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    this.valueExit.emit(this.progress);
  }
}
