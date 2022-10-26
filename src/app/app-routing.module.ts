import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesRegisterComponent } from './pages/pages-register/pages-register.component';

const routes: Routes = [
  { path: '', component: PagesRegisterComponent },
  { path: 'pages-register', component: PagesRegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
