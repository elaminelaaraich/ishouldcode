import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgeComponent } from './age/age.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'age', component: AgeComponent},
    { path: 'age/:age', component: AgeComponent},
    { path: '**', redirectTo: 'home'},

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }