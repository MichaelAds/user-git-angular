import { StarredRoutingModule } from './starred-git-routing.module';
import { StarredGitComponent } from './starred-git.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    StarredGitComponent
  ],
  imports: [
    CommonModule,
    StarredRoutingModule,
    SharedModule
  ],
  exports: [
    StarredGitComponent
  ]
})

export class StarredGitModule {}
