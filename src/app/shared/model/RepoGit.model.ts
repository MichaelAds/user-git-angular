export interface RepoGit {
  name: string,
  clone_url: string,
  forks: number,
  html_url: string,
  description: string,
  owner: {
    html_url: string,
    login: string
  }
}
