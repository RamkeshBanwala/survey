import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectFormComponent } from './shared/components/object-form/object-form.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'survey', component: ObjectFormComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
