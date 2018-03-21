import { Component, OnInit } from '@angular/core';
import { AngularFireStorage,  AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AuthlogService } from '../shared/authlog.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';



@Component({
  selector: 'app-showfile',
  templateUrl: './showfile.component.html',

})


export class ShowfileComponent  {


  private urlDocs: AngularFirestoreCollection<any>;
  picURLs: Observable<any>;



  constructor(private afstore: AngularFireStorage,
              private AuthlogService: AuthlogService,
              private afs: AngularFirestore) {

                }

  getpicURL() {
    this.urlDocs = this.afs.collection('users/' + this.AuthlogService.authState.uid + '/picUrls/')
    this.picURLs = this.urlDocs.valueChanges()
    .map(urls => {
      return urls.map(url => {
        const filepath = url.filepath
        return filepath
      })


    })
  }




}
