import { takeUntil } from 'rxjs/operators';
import { GitService } from '../../shared/service/git.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-git',
  templateUrl: './user-git.component.html',
  styleUrls: ['./user-git.component.scss']
})
export class UserGitComponent implements OnInit {
  private unsubscribe$ = new Subject;
  public userGit: any;

  constructor( private gitService: GitService) { }

  ngOnInit(): void {
    this.gitService.infoUser$
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      res => {
      this.userGit = res
    },
    error => console.error(error))
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
  }

}
