import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './shared/list/list.component';
import { StatuesComponent } from './component/statues/statues.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    StatuesComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
