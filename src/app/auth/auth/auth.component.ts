import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor() {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm) {
    console.log(form.value)

    const email = form.value.email
    const password = form.value.password

    // this.authService.signUp(email, password)

    // bate na api do firebase passando email e password

    form.reset()
  }

  ngOnInit(): void {
  }

}
