import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserGitComponent } from './container/user-git/user-git.component';
import { RepoGitComponent } from './container/repo-git/repo-git.component';
import { StarredGitComponent } from './container/starred-git/starred-git.component';


@NgModule({
  declarations: [
    AppComponent,
    UserGitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
