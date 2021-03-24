# Usuário Git
> Sistema realiza busca de dados de um usuário do GIT.

### Projeto feito em:
 <ul>
  <li>Angular</li>
  <li>Angular Material</li>
  <li>RXJS</li>
</ul>

## Como usar

Para rodar o projeto deve ter instalado em sua maquina o <a href="https://nodejs.org/en/" target="_blank">NodeJs</a>.
Com o NodeJs instalado basta rodar o comando:
```shell
npm install
```
> npm install vai trazer as dependencias do projeto. certifique-se de rodar esse comando dentro da pasta do clone.

Caso não tenha o Angular instalado na sua maquina, basta rodar o código abaixo:
```shell
npm install -g @angular/cli
```
Para saber se foi instalado corretamente o Angular, basta rodar o comando:
```shell
ng --version
```
<img width="756" alt="Screen Shot 2021-03-24 at 03 21 48" src="https://user-images.githubusercontent.com/30833118/112264737-13a84800-8c50-11eb-902b-39733b2aea27.png">

Agora com tudo configurado, basta rodar o comando:
```shell
ng s --open
```
Esse comando vai iniciar um servidor para rodar o codigo em ambiente local e logo após vai abrir o projeto em seu navegador padrão.

## Projeto
O projeto utiliza API do GIT para encontrar usuário, apresentar os repositorios e arquivos com estrelas.
Sistema em produção: <a href="https://search-user-git.vercel.app/" target="_blank">Search Git User</a>
<img width="1667" alt="Screen Shot 2021-03-24 at 03 30 20" src="https://user-images.githubusercontent.com/30833118/112265450-469f0b80-8c51-11eb-80cb-4f28be32c585.png">

> Utilizei no projeto a biblioteca <strong>RXJS</strong>, todas as chamadas são reativas, e utiliza o Patterns Observable.<br>
> O componente 'repo-git' e 'starred-git', estão separados em modules utilizando <strong>Lazy-Loading</strong> para ser carregado apenas quando forem chamados, assim não é iniciado assim que o sistema sobe.

### Saber mais
Caso queira saber mais sobre Angular:
<ul>
  <li>Doc <a href="https://angular.io/docs" target="_blank">Angular</a></li>
  <li><a href="https://material.angular.io/" target="_blank">Angular Material</a></li>
  <li><a href="https://docs.github.com/pt/rest" target="_blank">Api GIT</a>
  <li><a href="https://rxjs-dev.firebaseapp.com/" target="_blank">RXJS</a>
  <li><a href="https://angular.io/guide/lazy-loading-ngmodules" target="_blank">Lazy Loading</a>
</ul>


