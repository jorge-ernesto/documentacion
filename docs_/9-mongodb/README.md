# 9 MongoDB

Podemos entrar a la web oficial de [MongoDB](https://www.mongodb.com/es)<br>
Podemos entrar a la web oficial de [RoboMongo / Robo 3T](https://robomongo.org/)

## ¿Qué es MongoDB?

::: tip Aviso
**Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS**
* Podemos entrar al video ["207. Introducción a MongoDB" creado por Victor Robles sobre MongoDB](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10332142#overview)

**Master en Frameworks JavaScript: Aprende Angular, React, Vue**
* Podemos entrar al video ["56. MongoDB y bases de datos no relacionales - Introducción - ¿Que aprenderás?" creado por Victor Robles sobre MongoDB](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15380898#overview)

**Master en webs Full Stack: Angular, Node, Laravel, Symfony +**
* Podemos entrar al video ["121. MongoDB - ¿Que haremos?" creado por Victor Robles sobre MongoDB](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13841890#overview)

**Curso de MongoDB - Aprende bases de datos NoSQL + API NodeJS**
* Podemos entrar al video ["1. Introducción" creado por Victor Robles sobre MongoDB](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7065424#overview)
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

### Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
* [208. Teoría de MongoDB / Diferencia entre NoSQL y SQL](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10113424#overview)<br>
	Explicacion de como almacena la información MongoDB:
	* En una BD no relacional ya no tenemos un esquema, tenemos colecciones
	* En las colecciones tenemos documentos, no tenemos tablas
	* Los documentos son objetos JSON pero que dentro de MongoDB se conocen como BSON (Binary JSON) y se utilizan porque los BSON son mas rapido a la hora de hacer operaciones con los datos
	* En lugar de registros, tenemos los datos del documentos
<img width="500px" :src="$withBase('/mongodb/1 Base de Datos - Coleccion.png')">
* [209. Instalamos MongoDB](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10113414#overview)
* [211. Administrador visual de MongoDB: RoboMongo / Robo3T](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10113420#overview)

### Master en Frameworks JavaScript: Aprende Angular, React, Vue
* [57. Teoria de Mongo y NoSQL](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15380662#overview)
* [58. Instalar MongoDB desde cero y paso a paso](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15380672#overview)
* [60. Crear bases de datos, colecciones y documentos en Mongo db](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15380686#overview)
* [61. Administrador visual de MongoDB (GUI para Mongo)](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15380704#overview)

### Master en webs Full Stack: Angular, Node, Laravel, Symfony +
* [122. Bases de datos SQL vs NoSQL](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13546616#overview)
* [123. Instalar MongoDB](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13416810#overview)
* [125. Crear base de datos en MongoDB](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13416812#overview)
* [126. Instalar Robo 3T](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13416816#overview)

### Curso de MongoDB - Aprende bases de datos NoSQL + API NodeJS
* [2. Diferencias entre las bases de datos SQL y NoSQL. Teoría](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859586#overview)
* [3. Instalar MongoDB](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859670#overview)
* [4. Instalar Robo3T](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859678#overview)
* [5. Conexión y arranque de la base de datos](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859682#overview)
* [6. Comandos de ayuda](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859714#overview)
* [7. Listar base de datos](https://www.udemy.com/course/curso-de-mongodb-aprende-bases-de-datos-nosql/learn/lecture/7859724#overview)

### Otros
* [Cree una base de datos en MongoDB](https://www.mongodb.com/es/basics/create-database)

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos MongoDB
Instalamos [MongoDB](https://www.mongodb.com/try/download/community) desde su web

1. Descargar MongoDB (Hay 3 videos de los 3 cursos donde se muestra como instalar Robo3T)
	<img width="80%" :src="$withBase('/mongodb/2 Descargar MongoDB localmente.png')">
2. Account MongoDB (Configuración de MongoDB durante la instalación)
	<img width="80%" :src="$withBase('/mongodb/3 Account MongoDB.png')">
3. Crear en nuestro directorio `C:`, una carpeta nueva llamada `data`, y dentro de ella, crear otra carpeta llamada `db`. Aqui se almacenaran las BD y configuraciones de MongoDB
	<img width="80%" :src="$withBase('/mongodb/4 Directorio C.png')">

### Ejecutamos MongoDB

1. Recordar ejecutar `mongod.exe` (Debemos tenerlo en 2do plano siempre, es el demonio de MongoDB, ubicado en `C:\Program Files\MongoDB\Server\5.0\bin`)
2. Recordar ejecutar `mongo.exe` (Sirve para ejecutar consultas por consola, ubicado en `C:\Program Files\MongoDB\Server\5.0\bin`)

### Instalamos MongoDB en Laragon
Instalamos [MongoDB](https://www.mongodb.com/try/download/community) desde su web

::: tip Notas
* Los apuntes anteriores hacen referencia a instalar MongoDB con su ejecutable **msi** desde su web
* Los apuntes de esta sección hacen referencia a descargar la versión en formato **zip** de MongoDB desde su web, para instalarlo como binario en Laragon, para esto debemos:
:::

1. Ir a la siguiente ruta (Elegir version y descargarlo como **zip**):<br/>
	[MongoDB](https://www.mongodb.com/try/download/community)
2. Crear la carpeta `mongodb` en la ruta donde este instalado Laragon `D:\PORTABLES\laragon\bin`
3. Dentro de la carpeta creada `mongodb` descomprimir el archivo **zip** (Laragon permite manejar muchas versiones, por lo que debes mantener cada versión en su respectiva carpeta)
4. Laragon contiene un directorio `D:\PORTABLES\laragon\data` de modo que ya no es necesario el **Paso 3** de la sección **Instalamos MongoDB**
5. Al ejecutar MongoDB en Laragon se ejecuta el demonio de MongoDB `mongod.exe`, ubicado en `D:\PORTABLES\laragon\bin\mongodb\mongodb-win32-x86_64-windows-6.0.2\bin\mongod.exe`
6. El archivo zip de MongoDB no tendra `mongo.exe` por lo que no podremos ejecutar MongoDB por consola, debemos usar Robo3T

### Instalamos Robo3T
Instalamos [Robo3T](https://robomongo.org/) desde su web

1. Instalar Robo3T (Hay 3 videos de los 3 cursos donde se muestra como instalar Robo3T)

### Conexión en Robo3T
<img width="100%" :src="$withBase('/mongodb/5 Conexion Robo3T.png')">

### Aprendiendo MongoDB
#### Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
```javascript
help;          # Verificar comandos de MongoDB
db.help();     # Verificar comandos de MongoDB relacionados a las BD
db.version();  # Verificar version de BD
db.stats();    # Verificar estadisticas de BD
show dbs;      # Verificar Bases de Datos

use curso_master_javascript;                                          # Creamos Base de Datos
db.bookmarks.insert({ id: 1, title: 'Curso Master en JavaScript' });  # Solo insertando una coleccion hacemos commit a la creacion de BD

db.getCollection('bookmarks').find({});         # Buscamos en coleccion "bookmarks"
db.getCollection('bookmarks').find({ id: 1 });  # Buscamos en coleccion "bookmarks" el documento con el campo/dato del documento id:1
db.bookmarks.find();                            # Alternativa a buscamos en coleccion "bookmarks"
db.bookmarks.find({ id: 1 });                   # Alternativa a buscamos en coleccion "bookmarks"
```

#### Curso de MongoDB - Aprende bases de datos NoSQL + API NodeJS
```javascript
help;          # Verificar comandos de MongoDB
db.help();     # Verificar comandos de MongoDB relacionados a las BD
db.version();  # Verificar version de BD
db.stats();    # Verificar estadisticas de BD
show dbs;      # Verificar Bases de Datos

use curso_mongo;                                            # Creamos Base de Datos
db.frutas.insert({ nombre: 'Naranja', color: 'naranja' });  # Solo insertando una coleccion hacemos commit a la creacion de BD
manzana = { nombre: 'Manzana', color: 'verde' };            # Creamos variable, las variables solo persisten en la consola que se utilizan
db.frutas.insert(manzana);                                  # Insertamos coleccion usando variable

db.getCollection('frutas').find({});  # Buscamos en coleccion "frutas"
db.frutas.find();                     # Alternativa a buscamos en coleccion "frutas"
```
