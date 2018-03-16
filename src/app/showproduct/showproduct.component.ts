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
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent {

  private productDoc: AngularFirestoreDocument<any>;
  product: Observable<any>;

  Routeid: any = null;

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private afs: AngularFirestore,
              private route: ActivatedRoute) {
              this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });

          }


          getproduct () {

            this.Routeid = this.route.snapshot.params['proid']

            this.productDoc = this.afs.doc('products/' + this.Routeid)
            this.product = this.productDoc.valueChanges()



          }


}
