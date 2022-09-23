import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "careers", component: CareersComponent },
  { path: "location", component: LocationComponent },
  {path:"navigation", component: NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
