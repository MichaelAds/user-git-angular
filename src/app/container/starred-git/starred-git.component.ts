import { takeUntil } from 'rxjs/operators';
import { GitService } from '../../shared/service/git.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starred-git',
  templateUrl: './starred-git.component.html',
  styleUrls: ['./starred-git.component.scss']
})
export class StarredGitComponent implements OnInit {

  private unsubscribe$ = new Subject;
  public userName: any;
  public infoRepos: any;

  constructor(private gitService: GitService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('id');

    this.gitService.getStar(this.userName)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => this.infoRepos = res)
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
  }

}
