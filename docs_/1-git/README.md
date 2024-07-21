# 1 Git

Podemos entrar a la web oficial de [Git](https://git-scm.com/)<br>
Podemos entrar a la web oficial de [GitHub](https://github.com/)<br>
Repositorios de GitHub: [Bluuweb](https://github.com/bluuweb), [Jorge Ernesto](https://github.com/jorge-ernesto)

## ¿Qué es Git y GitHub?

::: tip Aviso
Podemos entrar a la [documentación creada por Bluuweb sobre Git](https://bluuweb.github.io/tutorial-github/guia/) creado en VuePress
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Setting your username in Git](https://docs.github.com/es/get-started/getting-started-with-git/setting-your-username-in-git)
* [Setting your commit email address](https://docs.github.com/es/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address)
* [Git Log](https://www.atlassian.com/git/tutorials/git-log)
* [Git Status](https://www.atlassian.com/git/tutorials/inspecting-a-repository)
* [Configuración de un repositorio](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository)
    * [git init](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository/git-init)
    * [git clone](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository/git-clone)
    * [git config](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository/git-config)
* [Guardar cambios](https://www.atlassian.com/es/git/tutorials/saving-changes)
    * [git add](https://www.atlassian.com/es/git/tutorials/saving-changes/git-add)
    * [git commit](https://www.atlassian.com/es/git/tutorials/saving-changes/git-commit)
    * [git diff](https://www.atlassian.com/es/git/tutorials/saving-changes/git-diff)
    * [git stash](https://www.atlassian.com/es/git/tutorials/saving-changes/git-stash)
    * [.gitignore](https://www.atlassian.com/es/git/tutorials/saving-changes/gitignore)
* [Sincronización](https://www.atlassian.com/es/git/tutorials/syncing)
    * [git remote](https://www.atlassian.com/es/git/tutorials/syncing/git-remote)
    * [git push](https://www.atlassian.com/es/git/tutorials/syncing/git-push)
    * [git pull](https://www.atlassian.com/es/git/tutorials/syncing/git-pull)
    * [pull request](https://www.atlassian.com/es/git/tutorials/making-a-pull-request)
        * [Cómo hacer tu primer pull request en GitHub](https://www.freecodecamp.org/espanol/news/como-hacer-tu-primer-pull-request-en-github/)
    * [git fetch](https://www.atlassian.com/es/git/tutorials/syncing/git-fetch)
* [Usando ramas](https://www.atlassian.com/git/tutorials/using-branches)
    * [git branch](https://www.atlassian.com/git/tutorials/using-branches/git-branch)
    * [git checkout](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)
    * [git merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge)
    * [Merge conflicts](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts)
* [Formas de abrir CMD en segundos y ejecutar comandos en Windows](https://www.softzone.es/windows-10/como-se-hace/abrir-cmd-ventana-simbolo-sistema/)
* [.gitignore no funciona](https://www.iteramos.com/pregunta/7813/gitignore-no-funciona)
* [cómo deshabilitar el mensaje de git sobre el nombre de la rama inicial de git](https://stackoverflow.com/questions/65524512/how-to-disable-git-message-about-git-initial-branch-name)
* [Nombre de archivo demasiado largo en Git para Windows](https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows)

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Git
```bash
git config --global user.name "Mona Lisa"           # Configurar nombre
git config --global user.name                       # Mostrar
git config --global user.email "email@example.com"  # Configurar email
git config --global user.email                      # Mostrar
git config --global init.defaultBranch <name>       # Configurar rama inicial
git config --global init.defaultBranch              # Mostrar
```

```bash
git clone https://github.com/<path>  # Clonar repositorio
git init                             # Iniciar git

git status                           # Muestra el estado del repositorio de trabajo
git add index.html                   # Almacenamos cambios del archivo provisionalmente
git commit -m "commit message"       # Hacemos commit, confirmamos cambios

git status                           # Muestra el estado del repositorio de trabajo
git add .                            # Almacenamos todos los cambios provisionalmente
git commit -m "Init commit"          # Hacemos commit, confirmamos cambios
```

```bash
git log                          # Muestra los commit
git log --stat                   # Muestra los commit
git log --oneline                # Muestra la descripción de los commit
git log --oneline -5             # Muestra la descripción de los ultimos 5 commit
git log --graph                  # Muestra la descripción de los commit de forma detallada
git log --oneline --graph --all  # Muestra la descripción de los commit de forma detallada

git diff                         # Muestra los cambios desde la ultima confirmacion
git diff 5edf8d1 2a9f474         # Muestra los cambios entre dos confirmaciones distintas

git branch                       # Muestra las ramas
```

#### Ejemplo de Python-CETAMPUCP
* En el video `Clase03-GIT-GITHUB` empieza a hablar sobre GIT en el momento **1:50:00** y termina en **2:28:00**
* Archivo `repoEjemplo`
```bash
git checkout 380851b             # Regresa en el tiempo hasta el commit que se indique
git switch -                     # Regresa al ultimo commit realizado, es decir donde nos encontrabamos

git checkout 380851b             # Regresa en el tiempo hasta el commit que se indique
git branch nueva_rama            # Creamos una nueva rama
git branch                       # Muestra las ramas
git checkout nueva_rama          # Nos movemos a la rama nueva_rama
# Hacemos cambios a partir de aqui, es decir hacemos commit
# Fin Hacemos commit
git checkout master              # Nos movemos a la rama master
git merge nueva_rama             # Estando en la rama master, quiero combinar cambios con nueva_rama
# Hacemos commit de la combinacion realizada
# Fin Hacemos commit

# A partir de aqui tendriamos que eliminar nueva_rama
# ya que esta solo tendra los cambios que se hicieron en ella.
# No tendra los ultimos cambios de rama master es decir la ultima version de produccion
git branch -D nueva_rama
# Fin Eliminar nueva_rama
```

```bash
git remote -v                                                             # Enumera las conexiones remotas que tienes con otros repositorios
git remote rm <name> | git remote remove <name>                           # Elimina la conexion remota
git remote rm origin | git remote remove origin
git remote add <name> <url>                                               # Agrega nueva conexion remota
git remote add origin https://github.com/jorge-ernesto/documentacion.git

git push                                                                  # Hacemos push en nuestro repositorio de GitHub
git push <remote> <branch>
git push origin master
git push sistemaweb

git pull                                                                  # Hacemos pull en nuestro repositorio de GitHub
git pull <remote> <branch>
git pull origin master
```

### Heroku
```bash
heroku login                                  # Nos logueamos con Heroku
heroku git:remote -a jorgeernesto-portafolio  # Clonamos el repositorio de git al repositorio de heroku

git add .
git commit -m "make it better"
git push heroku master                        # Pusheamos al repositorio a Heroku
```