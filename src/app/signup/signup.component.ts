import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthlogService } from '../shared/authlog.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  constructor(private AuthlogService: AuthlogService,
              private afs: AngularFirestore) { }





  OnSubmit (form: NgForm) {
    // console.log(form)
    const email = form.value.email;
    const password = form.value.password;


    this.AuthlogService.signup(email, password)

}





  ngOnInit() {
  }

}
