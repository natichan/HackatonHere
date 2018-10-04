import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';

// componentes
import { AppComponent } from './app.component';
import { IntroComponent } from './views/intro/intro.component';
import { LoginComponent } from './views/login/login.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { WallComponent } from './views/wall/wall.component';
import { EventsComponent } from './views/events/events.component';
import { SubscribeComponent } from './views/subscribe/subscribe.component';
import { ViewProfileComponent } from './views/view-profile/view-profile.component';
import { EventDetailComponent } from './popUp/event-detail/event-detail.component';
import { DetailPlaceComponent } from './popUp/detail-place/detail-place.component';
import { YourEventsComponent } from './popUp/your-events/your-events.component';
import { YourPlaceComponent } from './popUp/your-place/your-place.component';
import { UploadPhotoComponent } from './popUp/upload-photo/upload-photo.component';
import { EditProfileComponent } from './popUp/edit-profile/edit-profile.component';
import { CheckDataComponent } from './popUp/check-data/check-data.component';
import { SplashComponent } from './views/splash/splash.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { CreateAccountNameWorkComponent } from './popUp/create-account-name-work/create-account-name-work.component';

// Firebase
import { AngularFireDatabaseModule } from "@angular/fire/database"
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Services
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';




@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    LoginComponent,
    CreateAccountComponent,
    WelcomeComponent,
    WallComponent,
    EventsComponent,
    SubscribeComponent,
    ViewProfileComponent,
    EventDetailComponent,
    DetailPlaceComponent,
    YourEventsComponent,
    YourPlaceComponent,
    UploadPhotoComponent,
    EditProfileComponent,
    CreateAccountNameWorkComponent,
    CheckDataComponent,
    SplashComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: 'SignUp', component: SignUpComponent },
      { path: 'Splash', component: SplashComponent },
      { path: '', redirectTo: 'Splash', pathMatch: 'full' },
      { path: '**', redirectTo: 'Splash', pathMatch: 'full' }
    ])
  ],
  providers: [AuthService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
