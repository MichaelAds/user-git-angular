import { RepoGit } from './../model/RepoGit.model';
import { UserGit } from './../model/UserGit.model';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators/'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private infoUser = new Subject<any>();
  infoUser$ = this.infoUser.asObservable();

  constructor(private http: HttpClient) { }

  getUser(user: string) {
    return this.http.get<UserGit>(`https://api.github.com/users/${user}`)
    .pipe(
      map(this.userModel),
      catchError(error => {
        console.error(error)
        return throwError(error);
      })
      )
  }

  getRepo(user:string) {
    return this.http.get<RepoGit[]>(`https://api.github.com/users/${user}/repos`)
    .pipe(
      map(this.repoModal),
      catchError(error => {
        console.error(error)
        return throwError(error);
      })
      )
  }
  getStar(user:string) {
    return this.http.get<RepoGit[]>(`https://api.github.com/users/${user}/starred`)
    .pipe(
      map(this.repoModal),
      catchError(error => {
        console.error(error)
        return throwError(error);
      })
      )
  }

  infoNewUser(info: any) {
    this.infoUser.next(info)
  }

  userModel(data:UserGit) {
    return {
      avatar_url: data.avatar_url,
      bio: data.bio,
      blog: data.blog,
      company: data.company,
      email: data.email,
      followers: data.followers,
      following: data.following,
      location: data.location,
      login: data.login,
      name: data.name,
      public_repos: data.public_repos,
    }
  }

  repoModal(data:RepoGit[]) {
      const listRepo = [];
      for(let i = 0; i < data.length; i++ ){
        listRepo.push({
          name: data[i]?.name,
          clone_url: data[i]?.clone_url,
          forks: data[i]?.forks,
          html_url: data[i]?.html_url,
          description: data[i]?.description,
          owner_url: data[i].owner?.html_url,
          owner_login: data[i].owner?.login
        })
      }
      return listRepo;
  }
}
