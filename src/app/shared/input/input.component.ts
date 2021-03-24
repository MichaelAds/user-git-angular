import { Subject } from 'rxjs';
import { GitService } from './../service/git.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  public inputSearch: FormGroup;
  public messageError: string = '';
  private unsubscribe$ = new Subject;

  constructor(private fb: FormBuilder, private gitService: GitService, private route: Router) {
    this.inputSearch = this.fb.group({
      search: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.route.navigateByUrl('/');
    const userGit = this.inputSearch.controls['search'].value;
    this.gitService.getUser(userGit)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(
      res => this.createCard(res),
      error => {
        this.inputSearch.controls['search'].setErrors({error: true});
        this.messageError = 'Usuário não encontrado';
      }
      )

  }

  createCard(data: any) {
    this.gitService.infoNewUser(data)
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete()
  }


}
