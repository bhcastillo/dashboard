import { NgModule } from '@angular/core';
//Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

//components
import { IncreasingComponent } from './increasing/increasing.component';
import { DoughComponent } from './dough/dough.component';

@NgModule({
  declarations: [IncreasingComponent, DoughComponent],
  exports: [IncreasingComponent, DoughComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
})
export class ComponentsModule {}
