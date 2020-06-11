

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/app-material-module/app-material-module';
import { AppToolbarComponent } from './shared/components/app-toolbar/app-toolbar.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AppPreBootstrapService } from './app-pre-boot.service';
import { ObjectFormComponent } from './shared/components/object-form/object-form.component';
import { HomeComponent } from './shared/components/home/home.component';
import { GlobalErrorHandler } from './shared/services/error-handler/error-handler.service';

export function initApp(prebootStrap: AppPreBootstrapService) {
  return () => {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     console.log('In initApp');
    //     resolve();
    //   }, 3000);
    // });
    return prebootStrap.Init();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    MenuComponent,
    AppToolbarComponent,
    ObjectFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [AppPreBootstrapService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [AppPreBootstrapService],
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
