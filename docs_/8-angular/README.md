# 8 Angular

Podemos entrar a la web oficial de [Angular](https://angular.io/)<br />
Podemos entrar a la web oficial de [Angular CLI](https://angular.io/cli)<br />
Podemos entrar a la web oficial de [Node](https://nodejs.org/es/)<br />
Podemos entrar a la web oficial de [NPM](https://www.npmjs.com/)

## ¿Qué es Angular?

::: tip Aviso
Según [Victor Robles](https://victorroblesweb.es/2017/08/05/que-es-angular-y-para-que-sirve/): **Angular es un framework de desarrollo** para JavaScript creado por Google. La finalidad de Angular es facilitarnos el desarrollo de **aplicaciones web SPA** y además darnos herramientas para trabajar con los elementos de una web de una manera más sencilla y optima.
:::

## ¿Qué es Angular CLI?

::: tip Aviso
Según [Desarrollo web](https://desarrolloweb.com/articulos/angular-cli.html): **Angular CLI**, el intérprete de línea de comandos de Angular permite iniciar proyectos y la creación del esqueleto (scaffolding) de todo tipo de artefactos necesarios para el desarrollo de aplicaciones.
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [166. Instalar Angular](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10311524#overview) ----> Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
----
* [91. Instalar Angular paso a paso](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15718220#overview) ----> Master en Frameworks JavaScript: Aprende Angular, React, Vue
----
* [50. Instalar Angular](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13239438#overview) ----> Master en webs Full Stack: Angular, Node, Laravel, Symfony + **(Sección Laravel y Angular)**
* [180. Instalar Angular y preparar el proyecto](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13666344#overview) ----> [Instalar Angular 7 paso a paso - Victor Robles](https://victorroblesweb.es/2018/11/20/instalar-angular-7-paso-a-paso/) ----> Master en webs Full Stack: Angular, Node, Laravel, Symfony + **(Sección Node y Angular)**
* [292. Como instalar Angular y crear un proyecto con Angular CLI](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/14327842#overview) ----> Master en webs Full Stack: Angular, Node, Laravel, Symfony + **(Sección Symfony y Angular)**
----
* [Revisar version de Angular en proyecto](https://es.stackoverflow.com/questions/205257/cual-es-la-version-de-angular-que-tengo-instalada)
* [Guía de Estilo para Angular](https://angular.io/guide/styleguide)
* [Guía de Estilo para JavaScript](http://developinginspanish.com/2018/03/31/guia-de-estilo-javascript-de-google/)
* [Lista de compatibilidad para Angular - Referencia StackOverflow](https://stackoverflow.com/questions/60248452/is-there-a-compatibility-list-for-angular-angular-cli-and-node-js)
* [Lista de compatibilidad para Angular - Referencia Github](https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3)

::: tip Notas de los proyectos
#### <p style="color:green;">Importante: "Two" significa que lo hice yo mismo</p>
:::

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Node
Instalamos [Node](https://nodejs.org/es/) desde su web<br>
También podemos ver las [Versiones de Node](https://nodejs.org/es/download/releases/) y las [Versiones de Angular](https://angular.io/docs)
```bash
node -v
npm -v
```

### Instalamos Angular
1. Instalamos **NPM**, borramos cache y desactivamos auditorias
```bash
npm install -g npm@latest  # NO USAR ESTE COMANDO, sino usar el ejecutable de la web e instalar la versión que necesites o la version LTS (El ejecutable instala Node y la version de NPM con la que viene)
npm cache clean --force
npm cache verify & npm cache clear --force
npm set audit false
```

2. Desinstalamos versiones anteriores de **Angular CLI**, borramos cache
```bash
npm uninstall -g angular-cli
npm uninstall -g @angular/cli
npm cache clean --force                     # Borramos de nuevo la cache para eliminar todos los posibles conflictos que tengamos con npm
npm cache verify & npm cache clear --force  # Borramos la cache, se verifico y se comprimio, se elimino lo que se tuvo que eliminar / Para asegurarnos, borramos la cache, y borramos los paquetes antiguos, borramos lo que tenga que borrar
```

3. Instalamos **Angular CLI** en su ultima version
```bash
# Recomendacion: Ver 'Lista de compatibilidad para Angular'

# Intalar la ultima version de Angular CLI
npm install -g @angular/cli

# INSTALAR VERSION ESPECIFICA DE ANGULAR CLI
npm install -g @angular/cli@16.2.2

# Verificar version de Angular CLI (globalmente y proyecto) y version de Angular (proyecto)
ng version  # ng --version no funciona
ng
```



### 6-ejercicios-angular-two (master-javascript)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
* Cuando cree este proyecto lo hice con **Angular CLI 16.2.2**
:::

::: details ChatGPT
### ¿Angular recomienda usar versiones especificas de Node y NPM, cuando usas una version de Angular CLI?
Sí, Angular recomienda usar versiones específicas de Node.js y npm cuando se utiliza una versión particular de Angular CLI. Esto se debe a que diferentes versiones de Angular CLI pueden tener diferentes dependencias y requisitos de versión de Node.js y npm.

Por ejemplo, Angular 13.0.0 requiere Node.js 16.3.x o superior y npm 7.x o superior, mientras que Angular 12.0.0 requiere Node.js 14.x o superior y npm 6.x o superior.

Puedes verificar las versiones recomendadas de Node.js y npm para una versión específica de Angular CLI en la documentación oficial de Angular. Además, al crear un nuevo proyecto de Angular con el CLI, se mostrará un mensaje recomendando la versión de Node.js y npm a usar para esa versión de Angular CLI en particular.

### ¿Donde veo la documentacion de recomendaciones?
Puedes encontrar la documentación oficial de recomendaciones de Angular para las versiones de Node.js y npm en la sección "Prerequisites" de la guía de inicio rápido de Angular. La guía de inicio rápido se puede encontrar en la página principal del sitio web de Angular en la sección "Get started".

Aquí está el enlace directo a la guía de inicio rápido de Angular: [https://angular.io/guide/setup-local](https://angular.io/guide/setup-local)

En la sección **"Prerequisites"**, se proporciona una tabla que muestra las versiones recomendadas de Node.js y npm para cada versión de Angular. También se proporcionan enlaces a las páginas de descarga de Node.js y npm.

### Para obtener información sobre los requisitos de versión específicos, consulte la `engines` clave en el archivo [package.json](https://unpkg.com/@angular/cli/package.json)
* [https://unpkg.com/@angular/cli@6/package.json](https://unpkg.com/@angular/cli@6/package.json)
* [https://unpkg.com/@angular/cli@10/package.json](https://unpkg.com/@angular/cli@10/package.json)
* [https://unpkg.com/@angular/cli@16/package.json](https://unpkg.com/@angular/cli@16/package.json)
:::

* [https://reqres.in/](https://reqres.in/)
* [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
* [https://jsonplaceholder.typicode.com/guide/](https://jsonplaceholder.typicode.com/guide/)

```
ng new ejercicios-angular  # Creamos el proyecto
npm start                  # Levantamos el proyecto con el script definido en el archivo package.json
ng serve                   # Levantamos el proyecto
ng serve --open            # Levantamos el proyecto y abrimos en navegador

# Dependencias
    Las dependencias siempre estan instaladas en packgage.json del proyecto

    npm install  # Puedes recuperar node_modules y package-lock.json con el archivo package.json
    npm update   # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan

# Componentes
    ng g component components/home
    ng g component components/videojuego
    ng g component components/zapatillas
    ng g component components/cursos
    ng g component components/externo
    ng g component components/contacto
```



### 8-proyecto-angular-two (master-javascript)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
* Cuando cree este proyecto lo hice con **Angular CLI 16.2.2**
:::

* [Instalamos jquery](https://www.npmjs.com/package/jquery)

```
ng new proyecto-angular  # Creamos el proyecto
npm start                # Levantamos el proyecto con el script definido en el archivo package.json
ng serve                 # Levantamos el proyecto
ng serve --open          # Levantamos el proyecto y abrimos en navegador

# Dependencias
    Las dependencias siempre estan instaladas en packgage.json del proyecto

    npm install  # Puedes recuperar node_modules y package-lock.json con el archivo package.json
    npm update   # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan

    npm i jquery  # Instalamos jquery

# Componentes
    ng g component components/about
    ng g component components/create
    ng g component components/edit
    ng g component components/projects
    ng g component components/detail
    ng g component components/contact
    ng g component components/error
```



### 2-blog-angular-two (master-fullstack)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
* Cuando cree este proyecto lo hice con **Angular CLI 16.2.2**
:::

* [Instalamos jquery](https://www.npmjs.com/package/jquery)
* [Instalamos bootstrap](https://www.npmjs.com/package/bootstrap)
* [Instalamos angular-froala-wysiwyg](https://www.npmjs.com/package/angular-froala-wysiwyg)
* [Variables en TypeScript](https://www.cosmiclearn.com/lang-es/typescript-variables.php)
* [jQuery en Angular](https://victorroblesweb.es/2016/12/26/como-usar-jquery-en-angular-2/)
* [Reemplazar HTML Entities con JavaScript](https://victorroblesweb.es/2019/01/20/reemplazar-html-entities-con-javascript/)
* [Uso de form.controls['input'].reset() en lugar de form.reset()](https://stackoverflow.com/questions/50197347/how-to-reset-only-specific-fields-of-form-in-angular-5)
* [Problema de compatibilidad entre angular-froala-wysiwyg y ngModel](https://github.com/froala/angular-froala-wysiwyg/issues/4) (Se soluciono usando input tipo hidden)

::: details Paginación
**Creando una tabla paginada con back-end (server-side) en Angular y Laravel**
* [Creando una tabla paginada con back-end (server-side) en Angular y Laravel](https://asfo.dev/creando-una-tabla-paginada-con-back-end-server-side-en-angular/)
* [Instalamos ngx-pagination](https://www.npmjs.com/package/ngx-pagination)
* [Cambiar estilos CSS](https://stackoverflow.com/questions/55419031/change-ngx-pagination-css)
:::

```
ng new blog-angular  # Creamos el proyecto
npm start            # Levantamos el proyecto con el script definido en el archivo package.json
ng serve             # Levantamos el proyecto
ng serve --open      # Levantamos el proyecto y abrimos en navegador

# Dependencias
    Las dependencias siempre estan instaladas en packgage.json del proyecto

    npm install  # Puedes recuperar node_modules y package-lock.json con el archivo package.json
    npm update   # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan

    npm i jquery                  # Instalamos jquery
    npm i bootstrap               # Instalamos bootstrap
    npm i angular-froala-wysiwyg  # Instalamos angular-froala-wysiwyg
    npm i angular-file-uploader   # Instalamos angular-file-uploader
    npm i ngx-pagination          # Instalamos ngx-pagination

# Componentes
    ng g component components/login
    ng g component components/home
    ng g component components/register
    ng g component components/user-edit
    ng g component components/profile
    ng g component components/error

    ng g component components/category/category-index
    ng g component components/category/category-create
    ng g component components/category/category-edit
    ng g component components/category/category-post
    ng g component components/category/category-nav-item

    ng g component components/post/post-create
    ng g component components/post/post-edit
    ng g component components/post/post-detail
    ng g component components/post/post-list
```



```bash
Prueba de codigo bash en Markdown
```

```php
Prueba de codigo php en Markdown
```

```javascript
Prueba de codigo javascript en Markdown
```

```markdown
Prueba de codigo markdown en Markdown
```
