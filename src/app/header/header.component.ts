import { Component, OnInit } from '@angular/core';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent {

  authState: any = null;

  private shopcartDoc: AngularFirestoreCollection<any>;
  shopcart: Observable<any>;

  constructor (private AuthlogService: AuthlogService,
                private afAuth: AngularFireAuth,
              private afs: AngularFirestore) {}

  OnLogout () {
    this.AuthlogService.logout()
    console.log('It worked')
  }

  showcart () {
    this.shopcartDoc = this.afs.collection<any>('shoppingcart/' + this.AuthlogService.authState.uid + '/products')
    this.shopcart = this.shopcartDoc.valueChanges()
  }





}
