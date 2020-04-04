import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlValAccessorRoutingModule } from './control-val-accessor-routing.module';
import { ExampleComponent } from './example/example.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Example1Component } from './example1/example1.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [ExampleComponent, Example1Component],
  imports: [
    CommonModule,
    ControlValAccessorRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    QuillModule.forRoot()
  ]
})
export class ControlValAccessorModule { }
