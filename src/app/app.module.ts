import { FollowersComponent } from './components/followers/followers.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';

import { GITHUB_FOLLOWERS_ENDPOINT, POSTS_URL,  } from './common/app.config';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { CasePipePipe } from './case-pipe.pipe';
import { LikeComponent } from './components/like/like.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesComponent } from './components/courses/courses.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { UdemyformComponent } from './components/udemyform/udemyform.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { ArchiveDetailsComponent } from './components/archive-details/archive-details.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatSlideToggleModule } from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    SignupFormComponent,
    FavoriteComponent,
    CasePipePipe,
    LikeComponent,
    CoursesComponent,
    ZippyComponent,
    ContactFormComponent,
    UdemyformComponent,
    PasswordResetComponent,
    PostsComponent,
    HomeComponent,
    FollowersComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    NavbarComponent,
    NotFoundComponent,
    ArchiveComponent,
    ArchiveDetailsComponent,
    BasicInfoComponent
    
  ],
  imports: [
    MatSliderModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      // {path: 'archive/:username/:id', component: ArhiveDetailsComponent},
      {path: 'basic-info', component: BasicInfoComponent},
      {path: 'archive/:year/:month', component: ArchiveDetailsComponent},
      {path: 'archive', component: ArchiveComponent},
      {path: 'followers/:username/:id', component: GithubProfileComponent},
      {path: 'followers', component: GithubFollowersComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'zippy', component: ZippyComponent},
      {path: 'signup', component: SignupFormComponent},
      {path: 'like', component: LikeComponent},
      {path: 'udemyform', component: UdemyformComponent},
      {path: 'authors', component: AuthorsComponent},
      {path: 'contactform', component: ContactFormComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'passwordreset', component: PasswordResetComponent},
      {path: 'favorite', component: FavoriteComponent},










      {path: '**', component: NotFoundComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    AuthorsService,
    PostService,
    {provide : ErrorHandler, useClass : AppErrorHandler},
    // { provide: String, useValue: URL_TEST },
    // { provide: POSTS_URL, useValue: "https://jsonplaceholder.typicode.com/posts" },
    { provide: POSTS_URL, useValue: "https://api.github.com/users/mosh-hamedani/followers"},

    // { provide: GITHUB_FOLLOWERS_ENDPOINT, useValue: 'https://api.github.com/users/mosh-hamedani/followers' }
    
    // DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
