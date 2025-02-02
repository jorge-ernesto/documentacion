# 3 Laravel

Podemos entrar a la web oficial de [Laravel](https://laravel.com/)<br>
Podemos entrar a la web oficial de [Composer](https://getcomposer.org/)

## ¿Qué es Laravel?

::: tip Aviso
Podemos entrar al [video creado por Bluuweb sobre Laravel](https://www.youtube.com/playlist?list=PLPl81lqbj-4KHPEGngoy5PSjjxcwnpCdb) donde explica los fundamentos de Laravel y a la [documentación creada por Bluuweb sobre Laravel](https://bluuweb.github.io/tutorial-laravel/) creada en VuePress

<hr style="height: 5px; background-color: #42b983;">

Según [Juan Carlos Arcila Díaz (Ver vídeo dando click acá)](https://www.youtube.com/watch?v=Zj0pshSSlEo&list=PLZPrWDz1MolrxS1uw-u7PrnK66DCFmhDR&index=1):
* Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP.
* Fue creado en 2011, Laravel propone en el desarrollo usar **'Routes with Clousures'** en lugar de un MVC tradicional con el objetivo de hacer el código más claro.
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Instalamos Laravel 7.x](https://laravel.com/docs/7.x#installing-laravel)
* [Saber la versión de Laravel que tengo instalada](https://desarrolloweb.com/faq/saber-version-laravel-instalada)
* [como instalar una version anterior de laravel con composer ? ejemplo la version 5.1](https://platzi.com/comunidad/aa351770-2d96-4841-8e0c-e5528dd53558/) ----> Recordar que tambien se puede ir a la documentación de Laravel de cualquier versión y buscar [Installation Via Composer](https://laravel.com/docs/8.x/installation#installation-via-composer)
* [Establecer puerto para php artisan.php serve](https://qastack.mx/programming/17990820/set-port-for-php-artisan-php-serve)
* [Namespace y use](https://www.w3schools.com/php/php_namespaces.asp)
* [Laravel: Soporte PHP 8 - El Blog de Laravel](https://blog.laravel.com/laravel-php-8-support)

::: tip Notas Encriptación en Laravel
* Laravel proporciona `Hash::make` y `Hash::check` que es el equivalente a usar [password_hash](https://www.php.net/manual/es/function.password-hash.php) y [password_verify](https://www.php.net/manual/es/function.password-verify.php) que son funciones de PHP
* Usamos `Hash::make` en **sistemaweb-laravel-mysql**
* Usamos `Hash::make` en **proyecto-laravel / proyecto-laravel-two**
* Usamos `Hash::make` y `Hash::check` en **api-rest-laravel-two**
* Ver el archivo [http://localhost/8%20Otros/1%20util/hash.php](http://localhost/8%20Otros/1%20util/hash.php)
:::

::: tip Notas de los proyectos
#### <p style="color: green;">Importante: "Two" significa que lo hice yo mismo</p>

### <p style="color: green;">---- Juan Carlos Arcila Diaz ----</p>
### sistemaweb-laravel-mysql
1. Se uso migraciones
2. Se configuraron los modelos
3. Nombre de las tablas de la bd en singular (El archivo SQL original estaba en singular)
4. Revisar `CategoriaController` para ver documentación
5. Se configuro el log de Laravel<br>
   Buscar: `'debug' => (bool) env('APP_DEBUG', true), //false, se modifico`
6. Se modifico el timezone<br>
   Buscar: `'timezone' => 'America/Lima', //UTC, se modifico`
7. Se configuro la traducción a Español en la ruta `resources/lang`<br>
   Buscar: `'locale' => 'es', //en, se modifico`
8. La redireccion cuando te logueas por defecto es la ruta `/home` en la url<br>
   Buscar: `public const HOME = '/home';`
9. Se uso la plantilla "SB Admin", el repositorio minificado "plantilla-sb-admin" ubicado en:<br>
   `D:\PORTABLES\laragon\www\2 Bootstrap\3 Bootstrap 4 !De 0 a Experto! Curso completo + Forms con PHP (KKK)\plantillas\SB Admin`
10. Blindamos controladores con Gate para el control de permisos (Configuración luego de inicio rápido de autenticación)<br>
   Buscar: `Gate::define('haveaccess', function(User $user, $perm){`

### <p style="color: green;">---- Victor Robles ----</p>
### aprendiendo-laravel / proyecto-laravel / proyecto-laravel-two (master-php)
1. No se uso migraciones
2. Se configuraron los modelos
3. Nombre de las tablas de la bd en plural (Esto es lo correcto)
4. En este proyecto se realizara una copia de Instagram
5. Se modifico la redireccion cuando te logueas para que sea la ruta `/image` en la url<br>
   Buscar: `public const HOME = '/image'; //home`

### api-rest-laravel-two (master-fullstack)
1. No se uso migraciones
2. Se configuraron los modelos
3. Nombre de las tablas de la bd en plural (Esto es lo correcto)
3. En este proyecto se realizo un API REST en Laravel
:::

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Composer
Instalamos [Composer](https://getcomposer.org/) desde su web
```bash
composer --version
composer
```

### Instalamos Laravel
1.  Instalamos **Laravel CLI** en su ultima version
```bash
# Intalar la ultima version de Laravel CLI
composer global require laravel/installer

# Verificar instalacion de Laravel CLI
laravel --version
laravel

# Verificar version de Laravel en repositorios de los proyectos de Laravel
php artisan --version
php artisan
```

### sistemaweb-laravel-mysql
* [Laravel 7](https://laravel.com/docs/7.x)
* [Installing Laravel ----> Via Composer Create-Project](https://laravel.com/docs/7.x#installing-laravel)
* [GitHub - Laraveles/spanish: Repositorio de idioma de Laravel 5.](https://github.com/Laraveles/spanish)
* [Crear controllers](https://laravel.com/docs/7.x/controllers#resource-controllers)
* [Eloquent ORM](https://laravel.com/docs/7.x/eloquent)
* [Validacion unique](https://es.stackoverflow.com/questions/80943/error-al-actualizar-un-campo-unique)
* [Problema con "->groupBy" ----> "'strict' => false, //true, se modifico"](https://stackoverflow.com/questions/40917189/laravel-syntax-error-or-access-violation-1055-error)
* [Problema con migraciones al trabajar con con una versión inferior de Mysql v5.7.7 ----> "Schema::defaultStringLength(191); //Agregado para soportar migraciones"](https://bluuweb.github.io/tutorial-laravel/bases-datos/#migraciones)
* [Relacion de muchos a muchos, users, roles, y role_user](https://laravel.com/docs/7.x/eloquent-relationships#many-to-many)

```bash
# Creamos el proyecto
laravel new sistemaweb-laravel-mysql                                                 # Creamos el proyecto, via Laravel
composer create-project --prefer-dist laravel/laravel:^7.0 sistemaweb-laravel-mysql  # Creamos el proyecto, via Composer
php artisan serve                                                                    # Levantamos el proyecto

# Modelos
php artisan make:model Categoria  # Creamos el modelo Categoria
php artisan make:model Articulo
php artisan make:model Persona
php artisan make:model Ingreso
php artisan make:model Venta

# Controladores
php artisan make:controller PruebasController
php artisan make:controller CategoriaController --resource
php artisan make:controller ArticuloController --resource
php artisan make:controller ClienteController --resource
php artisan make:controller ProveedorController --resource
php artisan make:controller IngresoController --resource
php artisan make:controller VentaController --resource
php artisan make:controller UserController --resource
php artisan make:controller RoleController --resource
php artisan make:controller ModuleController --resource

# Migraciones
php artisan migrate           # Ejecuta migraciones pendientes
php artisan migrate:reset     # Revierte todas las migraciones realizadas, eliminando todas las tablas de la base de datos. Es decir, elimina todas las tablas y los datos que se han creado en la base de datos a través de las migraciones.
php artisan migrate:rollback  # Revierte la última migración realizada, eliminando solo las tablas y datos que se crearon en esa migración específica. Si se han realizado varias migraciones desde la última vez que se ejecutó `migrate:rollback`, solo se revierte la última migración.
php artisan migrate:refresh   # Realiza dos acciones en una sola línea. Primero se ejecuta `migrate:reset`, que revierte todas las migraciones previas y elimina todas las tablas de la base de datos. Luego, se ejecuta `migrate`, que vuelve a ejecutar todas las migraciones en orden cronológico, creando las tablas y llenándolas con datos nuevamente.

# Rutas
php artisan route:list  # Te muestra todas las rutas de web.php
php artisan list        # Lista de comandos
```

### deliveryyape
* [Laravel 8](https://laravel.com/docs/8.x)
* [Installing Laravel ----> Via Composer Create-Project](https://laravel.com/docs/8.x/installation#installation-via-composer)

```bash
# Creamos el proyecto
composer create-project laravel/laravel:^8.0 deliveryyape  # Creamos el proyecto, via Composer
php artisan serve                                          # Levantamos el proyecto

# Modelos
php artisan make:model Cliente  # Creamos el modelo Cliente

# Controladores
php artisan make:controller PruebasController
php artisan make:controller ClienteController --resource

# Rutas
php artisan route:list  # Te muestra todas las rutas de web.php
php artisan list        # Lista de comandos
```

### aprendiendo-laravel / proyecto-laravel / proyecto-laravel-two (master-php)
* [Laravel 7](https://laravel.com/docs/7.x)
* [Installing Laravel ----> Via Composer Create-Project](https://laravel.com/docs/7.x#installing-laravel)
* [Validation](https://laravel.com/docs/7.x/validation#manually-creating-validators)
* [Redirect](https://laravel.com/docs/7.x/responses#redirects)
* [Para el editor usaremos croppr.js](https://programadorwebvalencia.com/javascript-recortar-y-previsualizar-imagen/)
* [380. Formatear Fechas](https://www.udemy.com/course/master-en-php-sql-poo-mvc-laravel-symfony-4-wordpress/learn/lecture/11934452?components=buy_button,discount_expiration,gift_this_course,purchase,deal_badge,redeem_coupon&couponCode=M1ESPECIAL#overview)
* [Clase Helpers en web de Victor Robles](https://victorroblesweb.es/2018/01/18/crear-helpers-en-laravel-5/)
* [Service Injection](https://laravel.com/docs/7.x/blade#service-injection)
* [Hacer que se vea el nombre de la imagen en custom-file](https://es.stackoverflow.com/questions/256682/bootstrap-4-input-file-no-se-ve-en-el-label-el-nombre-del-fichero-subido)
* [Translating or customizing the strings with SCSS](https://getbootstrap.com/docs/4.5/components/forms/#translating-or-customizing-the-strings-with-scss)
* [Translating custom-file input Bootstrap 4](https://stackoverflow.com/questions/49234521/translating-custom-file-input-bootstrap-4)
* [Para correr Laravel Mix, escribir "npm install" y "npm run dev". El archivo de configuración se llama webpack.mix.js, alli esta especificado las rutas "resources/js/app.js" y "resources/sass/app.scss"](https://laravel.com/docs/7.x/mix#running-mix)

```bash
# Creamos el proyecto
laravel new proyecto-laravel-two                                                 # Creamos el proyecto, via Laravel
composer create-project --prefer-dist laravel/laravel:^7.0 proyecto-laravel-two  # Creamos el proyecto, via Composer
php artisan serve                                                                # Levantamos el proyecto

# Modelos
php artisan make:model Image  # Creamos el modelo Image
php artisan make:model Comment
php artisan make:model Like

# Controladores
php artisan make:controller PruebasController
php artisan make:controller UserController --resource
php artisan make:controller ImageController --resource
php artisan make:controller CommentController --resource
php artisan make:controller LikeController --resource
php artisan make:controller HomeController --resource

# Rutas
php artisan route:list  # Te muestra todas las rutas de web.php
php artisan list        # Lista de comandos
```

### api-rest-laravel-two (master-fullstack)
* [Laravel 6](https://laravel.com/docs/6.x)
* [Installing Laravel ----> Via Composer Create-Project](https://laravel.com/docs/6.x#installing-laravel)
* [Anexo:Códigos de estado HTTP - Wikipedia, la enciclopedia libre](https://es.wikipedia.org/wiki/Anexo:Códigos_de_estado_HTTP)
* [Crear helpers en Laravel 5 | Victor Robles](https://victorroblesweb.es/2018/01/18/crear-helpers-en-laravel-5/)
* [Cabeceras HTTP en PHP para permitir el acceso CORS - Victor Robles | Victor Robles](https://victorroblesweb.es/2017/04/23/cabeceras-http-php-permitir-acceso-cors/)
* [Evitar error CORS Access-Control-Allow-Origin con AJAX - Victor Robles | Victor Robles](https://victorroblesweb.es/2016/01/20/evitar-error-cors-access-control-allow-origin-con-ajax/)
* [Hashing](https://laravel.com/docs/7.x/hashing)
* [Providers](https://laravel.com/docs/7.x/providers)
* [Middleware](https://laravel.com/docs/7.x/middleware)

```bash
# Creamos el proyecto
laravel new api-rest-laravel-two                                                  # Creamos el proyecto, via Laravel
composer create-project --prefer-dist laravel/laravel api-rest-laravel-two "6.*"  # Creamos el proyecto, via Composer
php artisan serve                                                                 # Levantamos el proyecto

# Modelos
php artisan make:model Category  # Creamos el modelo Category
php artisan make:model Post

# Controladores
php artisan make:controller PruebasController
php artisan make:controller UserController --resource
php artisan make:controller CategoriaController --resource
php artisan make:controller PostController --resource

# Rutas
php artisan route:list  # Te muestra todas las rutas de web.php
php artisan list        # Lista de comandos
```

#### Instalar libreria para JWT ----> [23. Instalar Librería para JWT](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13144876#overview)
```
Ver video "23. Instalar libreria para JWT" de Victor Robles

Pasos
1. Luego de actualizar composer.json con "firebase/php-jwt": "3.0.0"
2. Ejecutar "composer update"
```

#### Provider ----> [24. Creando sistema de autenticación con JWT](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13144882#overview)
```
Ver video "24. Creando sistema de autenticación con JWT" de Victor Robles

Pasos
1. Creamos provider con "php artisan make provider JwtAuthServiceProvider" para que funcione es necesario agregarlo en config/app.php
2. Configuramos config/app.php para registrar el Provider
3. Creamos helper app/Helpers/JwtAuth.php

Si no registramos el provider la linea $jwtAuth = new JwtAuth(); en la function login de UserController no funcionara
```

#### Middleware ----> [30. Middleware de autenticación](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13154952#content)
```
Ver video "30. Middleware de autenticacion" de Victor Robles

Pasos
1. Creamos este middleware con "php artisan make:middleware ApiAuthMiddleware" para que funcione es necesario agregarlo en app/Http/Kernel.php
2. Configuramos app/Http/Kernel.php para registrar el Middleware
3. Usamos el middleware en las funciones update y upload de UserController, tambien se puede usar en los constructores del controlador
```
