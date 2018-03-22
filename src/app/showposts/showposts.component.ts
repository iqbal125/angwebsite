import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFireAuth } from 'angularfire2/auth';



export interface Post {
  uid: string;
  title: string;
  body: string;
}

export interface PostID extends Post {
  id: string;
}



@Component({
  selector: 'app-showposts',
  templateUrl: './showposts.component.html',

})
export class ShowpostsComponent implements OnInit  {


    authState: any = null;
    date: string = null;

    private postDoc: AngularFirestoreCollection<any>;
    posts: Observable<any>;


    constructor(private AuthlogService:AuthlogService,
                private afs: AngularFirestore,
                private afAuth: AngularFireAuth
                ) { this.afAuth.authState.subscribe((auth) => {
                 this.authState = auth
               });
              }



            ngOnInit () {
              this.postDoc = this.afs.collection<any>('posts/', ref => ref.where('uid', '==', this.authState.uid))
              this.posts = this.postDoc.snapshotChanges()
                .map(actions => {
                  return actions.map(action => {
                    const data = action.payload.doc.data();
                    const id = action.payload.doc.id;
                    return { id, ...data };
                  });
                });
            }

}
