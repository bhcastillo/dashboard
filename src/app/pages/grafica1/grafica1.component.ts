import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  labels1: string[] = ['element1', 'element2', 'element3'];
  data1 = [[350, 450, 100]];
  labels2: string[] = ['element4', 'element5', 'element6'];
  data2 = [[10, 50, 100]];
  labels3: string[] = ['element1', 'element2', 'element3'];
  data3 = [[30, 20, 100]];
  labels4: string[] = ['element1', 'element2', 'element3'];
  data4 = [[150, 50, 100]];
}
