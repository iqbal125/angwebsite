import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';
import { UserinfoService } from '../shared/userinfo.service';



@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',

})
export class SendmessageComponent  {

  private userDoc: AngularFirestoreCollection<any>;
  user: Observable<any>;


  username: any = null;
  messagetitle: any = null;
  messagebody: any = null;

  CurUid: any = null;

  CurUsername: any= null;


  constructor(private AuthlogService: AuthlogService,
              private router: Router,
              private afs: AngularFirestore,
              private userinfo: UserinfoService)
               { }



  finduser(form: NgForm) {
    this.username = form.value.username
    this.userDoc = this.afs.collection('users/', ref => ref.where('displayName', '==', this.username))
    this.user = this.userDoc.valueChanges()
   }

   getcuruser() {
     this.CurUid = this.AuthlogService.authState.uid
     this.userinfo.getusername(this.CurUid).subscribe(data => this.CurUsername = data['displayName'])
   }



    sendmessage(username, userid, title, body) {
      console.log(userid)
      console.log(title)
      console.log(body)

      firebase.firestore().collection('users/').doc(userid).collection('/messages/').add({
        to: username,
        title: title,
        body: body,
        from: this.CurUsername
      });
    }

}
