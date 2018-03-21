import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',

})
export class MessagesComponent implements OnInit {


  private messageDocs: AngularFirestoreCollection<any>;
  messages: Observable<any>;

  uid: any = null;

  title: any = null;
  body: any = null;
  from: any = null;


  constructor(private AuthlogService: AuthlogService,
              private afs: AngularFirestore)
               { }

  displaymessagebody (title, body, from) {
    this.title = title
    this.body = body
    this.from = from

  }

  ngOnInit() {

    this.uid = this.AuthlogService.authState.uid
    this.messageDocs = this.afs.collection('users/' + this.uid + '/messages/')
    this.messages = this.messageDocs.snapshotChanges()
    .map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data();
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });

  }

}
