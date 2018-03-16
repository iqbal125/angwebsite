import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthlogService } from '../shared/authlog.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private AuthlogService: AuthlogService) { }

  OnSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.AuthlogService.login(email, password)
   }

  ngOnInit() {
  }

}
