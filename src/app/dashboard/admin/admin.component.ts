import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  dummyForm: any;
  constructor(private fb: FormBuilder) {
    this.dummyForm = this.fb.group({
      record: this.fb.array([this.getRecord()])

    })
  };

  getRecord() {
    return this.fb.group({
      name: ['', Validators.required],
      adress: this.fb.group({
        city: [''],
        contact: ['', Validators.maxLength(10)],
        email: ['', Validators.email]
      }),
      specialField: this.fb.array([this.createField()])
    })
  }

  addRecord() {
    let record = this.dummyForm.controls.record.push(this.getRecord())
  }

  addField(re) {
    let specialField = this.dummyForm.controls.record.at(re).get('specialField') as FormArray
    specialField.push(this.createField())
  }

  createField() {
    return this.fb.group({
      option: '',
      isCorrect: ''
    });
  }

  ngOnInit() {
    console.log(this.dummyForm);
  }

  optionChecked(reInd, oInd) {
    this.dummyForm.controls.record.at(reInd).get('specialField').value.forEach((element, index) => {
      console.log(element, index)
      if (index === oInd) {
        element.isCorrect = true
      } else {
        element.isCorrect = false
      }
    })
  }
  submit() {
    console.log(this.dummyForm.value)
  }

}
