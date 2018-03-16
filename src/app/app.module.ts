import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { AuthlogService } from './shared/authlog.service';

import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { ShowpostsComponent } from './showposts/showposts.component';
import { ShowcommentsComponent } from './showcomments/showcomments.component';
import { AddfileComponent } from './addfile/addfile.component';
import { ShowfileComponent } from './showfile/showfile.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';




const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'store', component: StoreComponent },
   { path: 'signup', component: SignupComponent },
   { path: 'login', component: LoginComponent },
   { path: 'account', component: AccountPageComponent },
   { path: 'user/:uid', component: UserComponent},
   { path:'post', component: PostComponent},
   { path: 'showposts', component: ShowpostsComponent},
   { path: 'posts/:pid', component: ShowcommentsComponent },
   { path: 'addfile', component: AddfileComponent},
   { path: 'showfile', component: ShowfileComponent},
   { path: 'addproduct', component: AddproductComponent},
   { path:'showproduct', component: ShowproductComponent},
   { path:'store/shoppingcart/:id', component: ShoppingcartComponent},
   { path: 'account/account/sendmessage', component: SendmessageComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoreComponent,
    LoginComponent,
    SignupComponent,
    AccountPageComponent,
    UserComponent,
    PostComponent,
    ShowpostsComponent,
    ShowcommentsComponent,
    AddfileComponent,
    ShowfileComponent,
    AddproductComponent,
    ShowproductComponent,
    ShoppingcartComponent,
    SendmessageComponent,

  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
              AuthlogService
              ],
  bootstrap: [AppComponent]
})



export class AppModule { }