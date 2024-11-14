import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MainInterfaceComponent } from './components/main-interface/main-interface.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { ServicComponent } from './components/servic/servic.component';
import { CartListtComponent } from './components/cart-listt/cart-listt.component';
import { AddComponent } from './components/add/add.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { AcountInfoComponent } from './components/acout-info/acout-info.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'MainInter', pathMatch: 'full' },
      { path: 'MainInterface', component: MainInterfaceComponent },
      { path: 'Maintenance', component: MaintenanceComponent },
      { path: 'Servic', component: ServicComponent },
      { path: 'CartListt', component: CartListtComponent },
      { path: 'Add', component: AddComponent },
      { path: 'ChangePass', component: ChangePassComponent },
      { path: 'AcountInfo', component: AcountInfoComponent },
      { path: '**', component: MainInterfaceComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
