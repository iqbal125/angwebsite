import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';






@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})




export class UserComponent {



  authState: any = null;
  Routeid: any = null;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private afs: AngularFirestore,
              private route: ActivatedRoute) {
              this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });
          }



    updateuser (form: NgForm) {
      this.Routeid = this.route.snapshot.params['uid']
      console.log(this.Routeid)
      firebase.firestore().collection('users').doc(this.Routeid).set({
        uid: this.authState.uid,
        email: this.authState['email'],
        displayName: form.value.username,
        occupation: form.value.occupation
      }, {merge: true}).then(() => {
        this.router.navigate(['/']);
    });

    }





}
