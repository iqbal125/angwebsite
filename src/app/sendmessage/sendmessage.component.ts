import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';



@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent  {

  private userDoc: AngularFirestoreCollection<any>;
  user: Observable<any>;


  username: any = null;
  messagetitle: any = null;
  messagebody: any = null;


  constructor(private AuthlogService: AuthlogService,
              private router: Router,
              private afs: AngularFirestore
            ) {

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
