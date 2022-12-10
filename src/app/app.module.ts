import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPanelComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
