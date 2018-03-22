import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthlogService } from '../shared/authlog.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';





@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',

})
export class StoreComponent implements OnInit {


  private productDoc: AngularFirestoreCollection<any>;
  products: Observable<any>;

  counter: number = 0;


  constructor(private AuthlogService: AuthlogService,
              private router: Router,
              private afs: AngularFirestore,
              private route: ActivatedRoute) {

          }

          addtocart (productid, productname, productprice, productquantity, productdescription, productImgURL) {
            firebase.firestore().collection('shoppingcart/').doc(this.AuthlogService.authState.uid).collection('/products/').add({
              productid: productid,
              title: productname,
              uid: this.AuthlogService.authState.uid,
              price: +productprice,
              quantity: +productquantity,
              description: productdescription,
              ImgURL: productImgURL
          })
        }






          ngOnInit () {
            this.productDoc = this.afs.collection<any>('products/')
            this.products = this.productDoc.snapshotChanges()
              .map(actions => {
                return actions.map(action => {
                  const data = action.payload.doc.data();
                  const id = action.payload.doc.id;
                  return { id, ...data };
                });
              });
          }

}
