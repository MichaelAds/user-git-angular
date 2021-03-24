import { SharedModule } from './../../shared/shared.module';
import { RepoRoutingModule } from './repo-git-routing.module';
import { RepoGitComponent } from './repo-git.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    RepoGitComponent
  ],
  imports: [
    CommonModule,
    RepoRoutingModule,
    SharedModule
  ],
  exports: [
    RepoGitComponent
  ]
})

export class RepoGitModule {}
