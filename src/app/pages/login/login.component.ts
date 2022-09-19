import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  submit(): void {
    console.log('hello');
  }

}
