import { Component, OnInit } from '@angular/core';
import { AngularFireStorage,  AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';
import * as firebase from 'firebase';



@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',

})


export class AddfileComponent  {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  task: AngularFireUploadTask;



  constructor(private afstore: AngularFireStorage,
              private AuthlogService: AuthlogService) {

                }

  uploadFile(event) {

    const file = event.target.files[0];
    // Random number generator
    const randomNumber = Math.random() * 10000000000;
    const randomNumberInt = Math.round(randomNumber)
    const filePath = 'userpics/' + this.AuthlogService.authState.uid + '/' + randomNumberInt;
    const task = this.afstore.upload(filePath, file);




    this.uploadPercent = task.percentageChanges();

    this.downloadURL = task.downloadURL()
    task.downloadURL()
    .subscribe(url => {
      firebase.firestore().collection('users/').doc(this.AuthlogService.authState.uid).collection('/picUrls/').add({
        filepath: url
      })
    });

  }

}
