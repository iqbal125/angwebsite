import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';
import { UserinfoService } from '../shared/userinfo.service';



@Component({
  selector: 'app-showcomments',
  templateUrl: './showcomments.component.html',

})



export class ShowcommentsComponent  implements OnInit {


  private postDoc: AngularFirestoreDocument<any>;
  posts: Observable<any>;

  private commentDocs: AngularFirestoreCollection<any>;
  comments: Observable<any>;


  Routeid: any = null;

  CurUid: any = null;
  CurUsername: any= null;


  constructor(private AuthlogService: AuthlogService,
              private router: Router,
              private afs: AngularFirestore,
              private route: ActivatedRoute,
              private userinfo: UserinfoService)
              { }

          ngOnInit () {

            // display post
            this.Routeid = this.route.snapshot.params['pid']
            this.postDoc = this.afs.doc('posts/' + this.Routeid)
            this.posts = this.postDoc.valueChanges()


            // display comments
            this.commentDocs = this.afs.collection('posts/' + this.Routeid + '/comments/', ref => ref.where('pid', '==', this.Routeid))
            this.comments = this.commentDocs.snapshotChanges()
            .map(actions => {
              return actions.map(action => {
                const data = action.payload.doc.data();
                const id = action.payload.doc.id;
                return { id, ...data };
              });
            });

            // gets the current user's username
            this.CurUid = this.AuthlogService.authState.uid
            this.userinfo.getusername(this.CurUid).subscribe(data => this.CurUsername = data['displayName'])
          }




          addcomment(form: NgForm) {
            this.Routeid = this.route.snapshot.params['pid']
            firebase.firestore().collection('posts').doc(this.Routeid).collection('comments').add({
              uid: this.AuthlogService.authState.uid,
              pid: this.route.snapshot.params['pid'],
              comment: form.value.comment,
              name: this.CurUsername
            })
          }

}
