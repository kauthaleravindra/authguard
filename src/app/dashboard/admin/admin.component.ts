import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  specialField: FormArray;
  dummyForm: any;
  constructor(private fb: FormBuilder) {
    this.dummyForm = this.fb.group({
      name: ['', Validators.required],
      adress: this.fb.group({
        city: [''],
        contact: ['', Validators.maxLength(10)],
        email: ['', Validators.email]
      }),
      specialField: this.fb.array([this.createField()])
    })
  };

  addField() {
    this.specialField = this.dummyForm.get('specialField') as FormArray;
    this.specialField.push(this.createField());
    console.log(this.dummyForm)
  }

  createField() {
    return this.fb.group({
      name: ''
    });
  }

  ngOnInit() {
    console.log(this.dummyForm);
  }

  submit() {
    console.log(this.dummyForm.value)
  }

}
