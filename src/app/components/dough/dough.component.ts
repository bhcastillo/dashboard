import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-dough',
  templateUrl: './dough.component.html',
  styles: [],
})
export class DoughComponent {
  @Input() title: string = 'Title not available';
  @Input() data: string[];
  @Input() labels;

  public colors: Color[] = [
    { backgroundColor: ['#6857e', '#009fee', '#f02059'] },
  ];
}
