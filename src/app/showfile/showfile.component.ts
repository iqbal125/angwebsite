import { Component, OnInit } from '@angular/core';
import { AngularFireStorage,  AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { AuthlogService } from '../shared/authlog.service';



@Component({
  selector: 'app-showfile',
  templateUrl: './showfile.component.html',
  styleUrls: ['./showfile.component.css']
})


export class ShowfileComponent  {
  profileUrl: Observable<any>;



  constructor(private afstore: AngularFireStorage,
              private AuthlogService: AuthlogService) {

                }

    showpic ( ) {
      const ref = this.afstore.ref('userpics/' + this.AuthlogService.authState.uid);
      this.profileUrl = ref.getDownloadURL();
    }
}
