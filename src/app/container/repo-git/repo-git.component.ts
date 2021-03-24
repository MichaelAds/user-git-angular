import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { GitService } from '../../shared/service/git.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo-git',
  templateUrl: './repo-git.component.html',
  styleUrls: ['./repo-git.component.scss']
})
export class RepoGitComponent implements OnInit {
  private unsubscribe$ = new Subject;
  public userName: any;
  public infoRepos: any;

  constructor(private gitService: GitService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('id');

    this.gitService.getRepo(this.userName)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => this.infoRepos = res)
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
  }

}
