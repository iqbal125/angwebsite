import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



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
  styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent  {

    authState: any = null;


    private postDoc: AngularFirestoreCollection<any>;
    posts: Observable<any>;


    constructor(private afAuth: AngularFireAuth,
                private router: Router,
                private afs: AngularFirestore,
                private route: ActivatedRoute) {
                this.afAuth.authState.subscribe((auth) => {
                this.authState = auth
              });

            }



            showposts () {
              this.postDoc = this.afs.collection<any>('posts/', ref => ref.where('uid', '==', this.authState.uid))
              this.posts = this.postDoc.snapshotChanges()
                .map(actions => {
                  return actions.map(action => {
                    const data = action.payload.doc.data();
                    const id = action.payload.doc.id;
                    return { id, ...data };
                  });
                });
              console.log(this.postDoc)
              console.log(this.posts)


            }




}
