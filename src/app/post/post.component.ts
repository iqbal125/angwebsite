import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {

    authState: any = null;


    constructor(private afAuth: AngularFireAuth,
                private router: Router,
                private afs: AngularFirestore,
                private route: ActivatedRoute) {
                this.afAuth.authState.subscribe((auth) => {
                this.authState = auth
              });
            }

            addpostuser(form?: NgForm ) {
              firebase.firestore().collection('users').doc(this.authState.uid).collection('posts').add({
                title: form.value.title,
                body: form.value.post

            })
          }

            createpost (form?: NgForm) {
              firebase.firestore().collection('posts').add({
                uid: this.authState.uid,
                title: form.value.title,
                body: form.value.post
              }).then(() => {
                this.router.navigate(['/']);
            });

        }

}
