import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';


@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',

})


export class ShowproductComponent {

  private productDoc: AngularFirestoreDocument<any>;
  product: Observable<any>;

  Routeid: any = null;


  constructor(private AuthlogService: AuthlogService,
              private router: Router,
              private afs: AngularFirestore,
              private route: ActivatedRoute) {


          }


          getproduct () {

            this.Routeid = this.route.snapshot.params['proid']

            this.productDoc = this.afs.doc('products/' + this.Routeid)
            this.product = this.productDoc.valueChanges()



          }


}
