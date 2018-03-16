import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {Response } from '@angular/http'
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/switchMap'
import { Router } from '@angular/router';






@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})


export class AccountPageComponent  {





  authState: any = null;




          constructor(private afAuth: AngularFireAuth, private router: Router) {
         this.afAuth.authState.subscribe((auth) => {
           this.authState = auth
         });
        }




        ShowUsers1 () {
                    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
                    console.log(this.authState.uid)

                    firebase.firestore().collection('users')
                    .doc(this.authState.uid).get().then(function(doc) {
                      console.log(doc.data().occupation)
                    })
                 }

           }
