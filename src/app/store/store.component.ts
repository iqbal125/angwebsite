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
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  authState: any = null;


  private productDoc: AngularFirestoreCollection<any>;
  products: Observable<any>;

  private shopcartDoc: AngularFirestoreCollection<any>;
  shopcart: Observable<any>;


  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private afs: AngularFirestore,
              private route: ActivatedRoute) {
              this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });

          }

          addtocart (productid, productname, productprice, productquantity, productImgURL) {
            console.log(productid)
            firebase.firestore().collection('shoppingcart/').doc(this.authState.uid).collection('/products/').add({
              productid: productid,
              name: productname,
              uid: this.authState.uid,
              price: +productprice,
              quantity: +productquantity,
              ImgURL: productImgURL


          })
        }

        showcart () {
          this.shopcartDoc = this.afs.collection<any>('shoppingcart/' + this.authState.uid + '/products')
          this.shopcart = this.shopcartDoc.valueChanges()
        }



          showproducts () {
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
