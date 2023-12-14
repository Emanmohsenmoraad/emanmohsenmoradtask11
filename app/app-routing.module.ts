import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { MenueComponent } from './menue/menue.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'menu', component: MenueComponent},
  { path: 'contact', component: ContactUsComponent},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
