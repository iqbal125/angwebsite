import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';





@Injectable()
export class AuthlogService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
                 this.afAuth.authState.subscribe((auth) => {
                 this.authState = auth
               });
              }


  authenticated() {
    if (this.authState) {
      return true;
    }
  }

 signup(email: string, password: string) {
  this.afAuth
    .auth
    .createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Success!', value);
      this.router.navigate(['/user/', value.uid]);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
}

login(email: string, password: string) {
  this.afAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigate(['/user/', value.uid]);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
}

logout() {
  this.afAuth
    .auth
    .signOut().then(() => {
        this.router.navigate(['/']);
    });

}

}
