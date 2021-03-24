import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'repos/:id',
    loadChildren: () => import(`./container/repo-git/repo-git.module`).then(m => m.RepoGitModule)
  },
  {
    path: 'starred/:id',
    loadChildren: () => import(`./container/starred-git/starred-git.module`).then(m => m.StarredGitModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
