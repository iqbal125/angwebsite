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
  ) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  deletecartitem(productid) {
   firebase.firestore().doc('shoppingcart/' + this.authState.uid + '/products/' + productid).delete()
}

  ngOnInit() {
    this.shopproductDocs = this.afs.collection('shoppingcart/' + this.authState.uid + '/products/', ref => ref.where('uid', '==', this.AuthlogService.authState.uid))
    this.shopproducts = this.shopproductDocs.snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data();
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      });

}
