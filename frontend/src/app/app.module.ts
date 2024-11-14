import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainInterfaceComponent } from './components/main-interface/main-interface.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ServicComponent } from './components/servic/servic.component';
import { CartListtComponent } from './components/cart-listt/cart-listt.component';
import { AddComponent } from './components/add/add.component';
import { AcountInfoComponent } from './components/acout-info/acout-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    LoginComponent,
    MainInterfaceComponent,
    ChangePassComponent,
    MaintenanceComponent,
    ServicComponent,
    CartListtComponent,
    AddComponent,
    AcountInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
