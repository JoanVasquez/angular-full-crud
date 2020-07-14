import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewModule } from './view/todo/view.module';
import { ServiceModule } from './service/service.module';
import { ComponentModule } from './component/component.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewModule,
    ServiceModule,
    ComponentModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
