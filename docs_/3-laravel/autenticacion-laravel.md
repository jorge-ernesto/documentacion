# Autenticación en Laravel

### Inicio rápido de autenticación
* [Inicio rápido de autenticación](https://laravel.com/docs/7.x/authentication#authentication-quickstart)
* [Auth Bootstrap (Aqui explica que debemos ejecutar "npm install" y "npm run dev")](https://www.itsolutionstuff.com/post/laravel-7-auth-example-laravel-7-make-auth-commandexample.html)
* [Para correr Laravel Mix, ejecutar "npm install" y "npm run dev". ---- El archivo de configuración se llama webpack.mix.js, alli esta especificado las rutas "resources/js/app.js" y "resources/sass/app.scss"](https://laravel.com/docs/7.x/mix#running-mix)
```bash
composer require laravel/ui:^2.4
php artisan ui bootstrap --auth
npm install  # Instalamos dependencias
npm run dev  # Compilamos archivos SASS a CSS usando Laravel Mix
```

### Configuración luego de inicio rápido de autenticación
```php 
// Cambiamos la ruta HOME en app/Providers/RouteServiceProvider.php para que al loguearse se redireccione a esa ruta
public const HOME = '/home';

// Cambiamos en routes/web.php la ruta raiz para que redireccione a login
Route::get('/', function () {
    $auth = Auth::user();
 
    if(!empty($auth)){
        return view('home');
    }else{
        return view('auth.login');
    }
});

// Desactivamos routes en routes/web.php
Auth::routes([
    'register' => false,
    'reset'    => false,
    'confirm'  => false
]);

// En los controladores generamos la autenticacion para que solo se pueda acceder logueado
public function __construct(){
    $this->middleware('auth');
}
```

### Sistema de Roles y Permisos
* [Relacion de muchos a muchos, users, roles, y role_user](https://laravel.com/docs/7.x/eloquent-relationships#many-to-many)

```bash
# Creamos el modelo Role y su migracion
php artisan make:model Role -m

# Creamos la migracion para la tabla role_user
php artisan make:migration create_role_user_table
```

```php
// Creamos relacion de muchos a muchos en el modelo User y modelo Role
// Modelo User.php
public function roles(){
    return $this->belongsToMany('App\Role')->withTimeStamps();
}

// Modelo Role.php
public function users(){
    return $this->belongsToMany('App\User')->withTimeStamps();
}
```

```bash
# Creamos el modelo Permission y su migracion
php artisan make:model Permission -m

# Creamos la migracion para la tabla permission_role
php artisan make:migration create_permission_role_table
```

```php
// Creamos relacion de muchos a muchos en el modelo Role y modelo Permission
// Modelo Role.php
public function permissions(){
    return $this->belongsToMany('App\Permission')->withTimeStamps();
}

// Modelo Permission.php
public function roles(){
    return $this->belongsToMany('App\Role')->withTimeStamps();
}
```

```bash
# Creamos el modelo Module y su migracion
php artisan make:model Module -m
```

```bash
# Migramos tablas necesarias para la autenticacion
php artisan migrate           # Ejecuta migraciones pendientes
php artisan migrate:reset     # Revierte todas las migraciones realizadas, eliminando todas las tablas de la base de datos. Es decir, elimina todas las tablas y los datos que se han creado en la base de datos a través de las migraciones.
php artisan migrate:rollback  # Revierte la última migración realizada, eliminando solo las tablas y datos que se crearon en esa migración específica. Si se han realizado varias migraciones desde la última vez que se ejecutó `migrate:rollback`, solo se revierte la última migración.
php artisan migrate:refresh   # Realiza dos acciones en una sola línea. Primero se ejecuta `migrate:reset`, que revierte todas las migraciones previas y elimina todas las tablas de la base de datos. Luego, se ejecuta `migrate`, que vuelve a ejecutar todas las migraciones en orden cronológico, creando las tablas y llenándolas con datos nuevamente.

# Ejecutamos seed para completar datos en tablas roles, permissions, permission_role
seed.php
```

```php
// Probamos relacion de muchos a muchos en routes/web.php
Route::get('/test', function () {
    $roles = App\User::find(1)->roles()->get();     
    echo $roles;
});
```

### Autorización en template Blade
* [Autorizacion en template Blade](https://laravel.com/docs/7.x/authorization#via-blade-templates)