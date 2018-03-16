import { Component, OnInit } from '@angular/core';
import { AngularFireStorage,  AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  styleUrls: ['./addfile.component.css']
})
export class AddfileComponent  {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;

  authState: any = null;

  constructor(private afstore: AngularFireStorage,
              private afAuth: AngularFireAuth) {
                 this.afAuth.authState.subscribe((auth) => {
                  this.authState = auth })
                }

  uploadFile(event) {

    const file = event.target.files[0];
    // Random number generator
    const filePath = 'userpics/' + this.authState.uid;
    const task = this.afstore.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();
    console.log(this.downloadURL)
  }


}
