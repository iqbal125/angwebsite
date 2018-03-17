import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthlogService } from '../shared/authlog.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})



export class UserComponent {

  Routeid: any = null;

  constructor(private AuthlogService: AuthlogService,
              private router: Router,
              private afs: AngularFirestore,
              private route: ActivatedRoute) {

          }



    updateuser (form: NgForm) {
      this.Routeid = this.route.snapshot.params['uid']
      console.log(this.Routeid)
      firebase.firestore().collection('users').doc(this.Routeid).set({
        uid: this.AuthlogService.authState.uid,
        email: this.AuthlogService.authState['email'],
        displayName: form.value.username,
        occupation: form.value.occupation
      }, {merge: true}).then(() => {
        this.router.navigate(['/']);
    });

    }

}
