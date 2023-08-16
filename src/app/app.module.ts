import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, OverlayModule ],
  declarations: [ AppComponent, TooltipComponent, TooltipDirective ],
  bootstrap:    [ AppComponent ],
  entryComponents: [ TooltipComponent ]
})
export class AppModule { }
