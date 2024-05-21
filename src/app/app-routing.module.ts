import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [  {
  path:'',
  pathMatch: 'full',
  redirectTo:'home'
},
{
  path: 'properties',
  component:PropertiesComponent
},
{
  path: 'home',
  component:HomeComponent
},
{
  path: '**',
  redirectTo: 'home',
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
