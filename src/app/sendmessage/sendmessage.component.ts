import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent  {

  private userDoc: AngularFirestoreCollection<any>;
  user: Observable<[any]>;

  authState: any = null;

  username: any = null;
  messagetitle: any = null;
  messagebody: any = null;


  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private afs: AngularFirestore,
              private route: ActivatedRoute) {
              this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });
          }



  finduser(form: NgForm) {
    this.username = form.value.username
    console.log(this.username)
    this.userDoc = this.afs.collection('users/', ref => ref.where('displayName', '==', this.username))
    this.user = this.userDoc.valueChanges()

  }

    sendmessage(userid, title, body) {
      console.log(userid)
      console.log(title)
      console.log(body)


      firebase.firestore().collection('users/').doc(userid).collection('/messages/').add({
        title: title,
        body: body
      });
    }

}
