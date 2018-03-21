import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';



@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
})
export class ShoppingcartComponent {


  private shopproductDocs: AngularFirestoreCollection<any>;
  shopproducts: Observable<any>;


  constructor(private AuthlogService: AuthlogService,
              private afs: AngularFirestore
              ) {
          }


          showcart () {
          this.shopproductDocs = this.afs.collection('shoppingcart/' + this.AuthlogService.authState.uid + '/products/', ref => ref.where('uid', '==', this.AuthlogService.authState.uid))
          this.shopproducts = this.shopproductDocs.valueChanges()
          console.log(this.shopproducts)
        }



}
