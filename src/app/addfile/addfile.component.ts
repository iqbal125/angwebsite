import { Component, OnInit } from '@angular/core';
import { AngularFireStorage,  AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AuthlogService } from '../shared/authlog.service';


@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  styleUrls: ['./addfile.component.css']
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
    const filePath = 'userpics/' + this.AuthlogService.authState.uid;
    const task = this.afstore.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();
    console.log(this.downloadURL)
  }


}
