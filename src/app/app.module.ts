import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogDeleteComponent } from './blog-delete/blog-delete.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Route} from '@angular/router';
import { BlogComponent } from './blog/blog.component';

const ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
{ path: 'create', component: BlogCreateComponent,},
{ path: 'blog/:blogId', component: BlogComponent },
{ path: 'edit/:blogId', component: BlogEditComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogEditComponent,
    BlogCreateComponent,
    BlogDeleteComponent,
    HeaderComponent,
    BlogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
     ROUTES
    //,
    // {
    // enableTracing: true
    // }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
