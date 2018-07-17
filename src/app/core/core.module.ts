import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [MainContainerComponent],
  exports: [MainContainerComponent]
})
export class CoreModule { }
