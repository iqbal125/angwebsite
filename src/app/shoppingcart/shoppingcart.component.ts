import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
})
export class ShoppingcartComponent implements OnInit {


  authState: any = null;


  private shopproductDocs: AngularFirestoreCollection<any>;
  shopproducts: Observable<any>;



  constructor(private AuthlogService: AuthlogService,
              private afs: AngularFirestore,
              private afAuth: AngularFireAuth,
            ) {this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });
          }


ngOnInit () {

  this.shopproductDocs = this.afs.collection('shoppingcart/' + this.authState.uid + '/products/', ref => ref.where('uid', '==', this.AuthlogService.authState.uid))
  this.shopproducts = this.shopproductDocs.valueChanges()


}




}
