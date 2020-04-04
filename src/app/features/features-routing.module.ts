import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineFormEditComponent } from './inline-form-edit/inline-form-edit.component';

const routes: Routes = [
  {
    path: 'edit-inline',
    component: InlineFormEditComponent
  },
  {
    path: '',
    redirectTo: 'edit-inline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
