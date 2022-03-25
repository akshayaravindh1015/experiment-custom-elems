import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [AppComponent, CustomButtonComponent],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [],
  entryComponents: [CustomButtonComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const custButton = createCustomElement(CustomButtonComponent, {
      injector: this.injector,
    });
    customElements.define('custom-button', custButton);
  }
}
