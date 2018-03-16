import { Component, OnInit } from '@angular/core';
import { AngularFireStorage,  AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-showfile',
  templateUrl: './showfile.component.html',
  styleUrls: ['./showfile.component.css']
})


export class ShowfileComponent  {
  profileUrl: Observable<any>;

  authState: any = null;


  constructor(private afstore: AngularFireStorage,
              private afAuth: AngularFireAuth) {
                 this.afAuth.authState.subscribe((auth) => {
                  this.authState = auth })
                }

    showpic ( ) {
      const ref = this.afstore.ref('userpics/' + this.authState.uid);
      this.profileUrl = ref.getDownloadURL();
    }
}
