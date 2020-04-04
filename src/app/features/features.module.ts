import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { InlineFormEditComponent } from './inline-form-edit/inline-form-edit.component';

@NgModule({
  declarations: [InlineFormEditComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
