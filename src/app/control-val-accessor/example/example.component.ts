import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor() { }
  exampleForm: FormGroup;
  ngOnInit() {
    this.buildForm()
  }
  buildForm() {
    this.exampleForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastName: new FormControl('kauthale', [])
    })
  }

  submit() {
    console.log(this.exampleForm)
  }


}
