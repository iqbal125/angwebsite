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
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {


  private shopproductDocs: AngularFirestoreCollection<any>;
  shopproducts: Observable<any>;

  authState: any = null;

  Routeid: any = null;


  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private afs: AngularFirestore,
              private route: ActivatedRoute) {
              this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });

          }


          showcart () {
          this.shopproductDocs = this.afs.collection('shoppingcart/' + this.authState.uid + '/products/', ref => ref.where('uid', '==', this.authState.uid))
          this.shopproducts = this.shopproductDocs.valueChanges()
          console.log(this.shopproducts)
        }



}
