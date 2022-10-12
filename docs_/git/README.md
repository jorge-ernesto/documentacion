# Git / GitHub

Podemos entrar a la web oficial de [Git](https://git-scm.com/)<br>
Podemos entrar a la web oficial de [GitHub](https://github.com/)<br>
Repositorios de GitHub: [Bluuweb](https://github.com/bluuweb), [Jorge Ernesto](https://github.com/jorge-ernesto)

## ¿Qué es Git y GitHub?

::: tip Aviso
Podemos entrar a la [documentación creada por Bluuweb sobre Git](https://bluuweb.github.io/tutorial-github/guia/) creado en VuePress
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Setting your username in Git](https://docs.github.com/es/get-started/getting-started-with-git/setting-your-username-in-git)<br>
* [Setting your commit email address](https://docs.github.com/es/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)<br>
* [Formas de abrir CMD en segundos y ejecutar comandos en Windows](https://www.softzone.es/windows-10/como-se-hace/abrir-cmd-ventana-simbolo-sistema/)<br>
* [Sincronización de Git](https://www.atlassian.com/es/git/tutorials/syncing)
    * [git remote](https://www.atlassian.com/es/git/tutorials/syncing/git-remote)
    * [git push](https://www.atlassian.com/es/git/tutorials/syncing/git-push)
    * [git pull](https://www.atlassian.com/es/git/tutorials/syncing/git-pull)
    * [git fetch](https://www.atlassian.com/es/git/tutorials/syncing/git-fetch)

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Git
```
git config --global user.name "Monalisa" (Configurar)
git config --global user.name (Mostrar)
git config --global user.email "email@example.com" (Configurar)
git config --global user.email (Mostrar)
```

```
git clone htts://github.com/KKK (Clonar repositorio)
```

```
git init (Inicia git)

git status
git add index.html
git commit -m "Agregando index.html"

git status
git add .
git commit -m "Agregando estructura básica de HTML"

git status
git add index.html
git status
git rm --cached index.html (remove)
git status
```

```
git log (Muestra los commit)
git log --stat (Muestra los commit)
git log --oneline (Muestra la descripción de los commit)
git log --graph (Muestra la descripción de los commit de forma detallada)
git log --oneline --graph --all (Muestra la descripción de los commit de forma detallada)
git diff (Muestra los cambios en el mismo commit)
git diff Se00144 index.html (Muestra los cambios con otro commit)
git log --oneline
git checkout Se00144 (Regresa en el tiempo hasta el commit)
git branch (Muestra ramas)
git checkout master (Regresa el checkout anterior, regresamos a la rama master, regresa el regreso en el tiempo)
```

```
git branch (Muestra ramas)
git checkout -b experimento (Creamos una rama llamada experimento, además cambiamos a esa rama, a la rama Experimento)
git branch 
git status
git add .
git commit -m "Agregamos texto a la rama Exprimento"
git log --oneline (Muestra la descripción de los commit)
```

```
git branch (Muestra ramas)
git checkout master (Regresamos a la rama Master)
git branch
git merge experimento (Fusionamos las ramas, si hubiera algun conflicto el editor de codigo nos avisa)
git branch -d experimento (Eliminamos la rama)
```

```
git remote -v (Enumera las conexiones remotas que tienes con otros repositorios)
git remote rm <name> | git remote remove <name> (Elimina la conexion remota)
git remote rm origin | git remote remove origin
git remote add <name> <url> (Agrega nueva conexion remota)
git remote add origin https://github.com/jorge-ernesto/documentacion.git

git push (Hacemos push en nuestro repositorio de GitHub)
git push <remote> <branch>
git push origin master
git push sistemaweb

git pull (Hacemos pull en nuestro repositorio de GitHub)
git pull <remote> <branch>
git pull origin master
```

### Heroku
```
heroku login (Nos logueamos con Heroku)
heroku git:remote -a jorgeernesto-portafolio (Clonamos el repositorio de git al repositorio de heroku)

git add .
git commit -m "make it better"
git push heroku master (Pusheamos al repositorio a Heroku)
```