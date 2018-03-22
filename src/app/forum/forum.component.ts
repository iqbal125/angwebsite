import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})


export class ForumComponent implements OnInit {

  private allpostDoc: AngularFirestoreCollection<any>;
  allposts: Observable<any>;


  constructor(private AuthlogService:AuthlogService,
              private afs: AngularFirestore,
              private afAuth: AngularFireAuth
              ) {
            }



              ngOnInit () {
                this.allpostDoc = this.afs.collection<any>('posts/')
                this.allposts = this.allpostDoc.snapshotChanges()
                  .map(actions => {
                    return actions.map(action => {
                      const data = action.payload.doc.data();
                      const id = action.payload.doc.id;
                      return { id, ...data };
                    });
                  });
              }

}
