# 5 Node

Podemos entrar a la web oficial de [Node](https://nodejs.org/es/)<br>
Podemos entrar a la web oficial de [NPM](https://www.npmjs.com/)

## ¿Qué es Node?

::: tip Aviso
* Podemos entrar a la [documentación creada por Bluuweb sobre Node](https://bluuweb.github.io/node/) creada en VuePress
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Enlaces Utiles de Angular](/angular/#enlaces-utiles) ---> Podemos ver como se instala Node antes de instalar Angular
* [220. Como usar un cliente RESTful](https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/learn/lecture/10232656#overview) ---> Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
* [69. Trabajando con un cliente RESTful](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15517598#overview) ---> Master en Frameworks JavaScript: Aprende Angular, React, Vue
* [133. El cliente REST](https://www.udemy.com/course/master-en-desarrollo-web-full-stack-angular-node-laravel-symfony/learn/lecture/13616188#overview) ---> Master en webs Full Stack: Angular, Node, Laravel, Symfony +

::: tip Notas de los proyectos
#### <p style="color:green;">Importante: "Two" significa que lo hice yo mismo</p>
:::

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Node
Instalamos [Node](https://nodejs.org/es/) desde su web
```bash
node -v
npm -v
```

### Instalamos Node en Laragon
Instalamos [Node](https://nodejs.org/es/) desde su web

::: tip Notas
* Los apuntes anteriores hacen referencia a instalar Node con su ejecutable **msi** desde su web
* Los apuntes de esta sección hacen referencia a descargar la versión en formato **zip** de Node desde su web, para instalarlo como binario en Laragon, para esto debemos:
:::

1. Ir a la siguiente ruta:<br/>
	[Actualizar la versión de Node.js en Laragon](https://sergioss.net/actualizar-la-version-de-node-js-en-laragon/)
2. Una vez realizada la instalación de Node.js en Laragon agregar la ruta al PATH de Windows.
3. Para agregar Node.js al PATH de Windows, siga estos pasos:
	1. Abra el menú Inicio y busque `Variables de entorno` y seleccione `Editar las variables de entorno del sistema`.
	2. En la pestaña `Opciones avanzadas`, haga clic en `Variables de entorno`.
	3. En la sección `Variables del sistema`, busque la variable `Path` y haga clic en `Editar`.
	4. Haga clic en `Nuevo` y agregue la ruta de instalación de Node.js (por ejemplo, `C:\Program Files\nodejs`). ---- En nuestro caso seria `D:\PORTABLES\laragon\bin\nodejs\node-v12.11.1-win-x64`.
	5. Haga clic en `Aceptar` para guardar los cambios.



### 7-backend-nodejs-two (master-javascript)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
:::

```bash
npm init -y                 # Crear package.json de forma predeterminada
npm init      				# Crear package.json y nos permite personalizarlo en consola
node index o node index.js  # Estos comandos se utilizan para ejecutar el archivo index.js (o cualquier otro archivo de JavaScript específico) en Node.js. Este comando es útil cuando se desea ejecutar un archivo JavaScript que no es una aplicación completa, sino que puede ser una biblioteca o un módulo específico.
npm start      				# De este modo también levantamos un proyecto en React. Este comando se utiliza para iniciar la aplicación principal de tu proyecto, definida en el archivo package.json. Este comando es útil para automatizar la tarea de iniciar la aplicación y manejar las variables de entorno necesarias.
npm run start  				# Este comando también inicia la aplicación principal de tu proyecto, pero permite ejecutar cualquier otro script personalizado definido en el archivo package.json. Por ejemplo, si tienes un script personalizado llamado start-dev, puedes ejecutarlo con el comando npm run start-dev.

# Dependencias
Las dependencias siempre estan instaladas en packgage.json del proyecto

npm i          # Puedes recuperar node_modules y package-lock.json con el archivo package.json
npm install    # Puedes recuperar node_modules y package-lock.json con el archivo package.json
npm update     # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan
npm update -g  # Actualiza todos las dependencias globales

npm install --save-dev nodemon  # Instalamos nodemon como dependencia de desarrollo, --save para indicarle que sea dependencia del proyecto y -dev para indicarle que sea dependencia de desarrollo
npm i body-parser               # Instalamos body-parser        ---> Se encarga de recibir una peticion HTTP normal, se encarga tomar toda esa información, la informacion del body y convertirla a JSON
npm i connect-multiparty        # Instalamos connect-multiparty ---> Permite subir archivos al backend
npm i express                   # Instalamos express            ---> Framework que funciona sobre NodeJS, que se encarga de todas las peticiones HTTP, framework backend que se encarga de hacerlo todo, si queremos hacer una API o una aplicacion completa con Node, necesitamos Express
npm i mongoose                  # Instalamos mongoose           ---> Es un ORM, una herramienta de modelado de objetos, diseñada para trabajar con MongoDB
```



### 3-api-rest-node-two (master-fullstack)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
:::

* [Mongoose](https://mongoosejs.com)
* [Como diseñar una base de datos con DIA - Victor Robles](https://victorroblesweb.es/2016/02/20/disenar-una-base-datos-dia/)
* [¿Qué es REST? Conoce su potencia](https://openwebinars.net/blog/que-es-rest-conoce-su-potencia/)
* [Diferencia entre let, var, const](https://platzi.com/discusiones/1099-fundamentos-javascript-2017/32001-cual-es-la-diferencia-entre-var-let-y-const/)

```bash
npm init -y                 # Crear package.json de forma predeterminada
npm init      				# Crear package.json y nos permite personalizarlo en consola
node index o node index.js  # Estos comandos se utilizan para ejecutar el archivo index.js (o cualquier otro archivo de JavaScript específico) en Node.js. Este comando es útil cuando se desea ejecutar un archivo JavaScript que no es una aplicación completa, sino que puede ser una biblioteca o un módulo específico.
npm start      				# De este modo también levantamos un proyecto en React. Este comando se utiliza para iniciar la aplicación principal de tu proyecto, definida en el archivo package.json. Este comando es útil para automatizar la tarea de iniciar la aplicación y manejar las variables de entorno necesarias.
npm run start  				# Este comando también inicia la aplicación principal de tu proyecto, pero permite ejecutar cualquier otro script personalizado definido en el archivo package.json. Por ejemplo, si tienes un script personalizado llamado start-dev, puedes ejecutarlo con el comando npm run start-dev.

# Dependencias
Las dependencias siempre estan instaladas en packgage.json del proyecto

npm i          # Puedes recuperar node_modules y package-lock.json con el archivo package.json
npm install    # Puedes recuperar node_modules y package-lock.json con el archivo package.json
npm update     # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan
npm update -g  # Actualiza todos las dependencias globales

npm install --save-dev nodemon  # Instalamos nodemon como dependencia de desarrollo, --save para indicarle que sea dependencia del proyecto y -dev para indicarle que sea dependencia de desarrollo
npm i bcrypt                    # Instalamos bcrypt                ---> Para hashear contraseñar
npm i body-parser               # Instalamos body-parser           ---> Se encarga de recibir una peticion HTTP normal, se encarga tomar toda esa información, la informacion del body y convertirla a JSON
npm i connect-multiparty        # Instalamos connect-multiparty    ---> Permite subir archivos al backend
npm i express                   # Instalamos express               ---> Framework que funciona sobre NodeJS, que se encarga de todas las peticiones HTTP, framework backend que se encarga de hacerlo todo, si queremos hacer una API o una aplicacion completa con Node, necesitamos Express
npm i jwt-simple                # Instalamos jwt-simple            ---> Nos permite generar Token y decodificar Token
npm i moment                    # Instalamos moment                ---> Procesar fechas, limpiarlas, darle un formato concreto, etc
npm i mongoose                  # Instalamos mongoose              ---> Es un ORM, una herramienta de modelado de objetos, diseñada para trabajar con MongoDB
npm i mongoose-paginate-v2      # Instalamos mongoose-paginate-v2  ---> Paginacion con mongoose
npm i validator                 # Instalamos validator             ---> Validar datos, validar email, string, numero, cosas asi
```



### seccion-07-node (master-frameworks-javascript)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
:::

```bash
npm init -y                 # Crear package.json de forma predeterminada
npm init      				# Crear package.json y nos permite personalizarlo en consola
node index o node index.js  # Estos comandos se utilizan para ejecutar el archivo index.js (o cualquier otro archivo de JavaScript específico) en Node.js. Este comando es útil cuando se desea ejecutar un archivo JavaScript que no es una aplicación completa, sino que puede ser una biblioteca o un módulo específico.
npm start      				# De este modo también levantamos un proyecto en React. Este comando se utiliza para iniciar la aplicación principal de tu proyecto, definida en el archivo package.json. Este comando es útil para automatizar la tarea de iniciar la aplicación y manejar las variables de entorno necesarias.
npm run start  				# Este comando también inicia la aplicación principal de tu proyecto, pero permite ejecutar cualquier otro script personalizado definido en el archivo package.json. Por ejemplo, si tienes un script personalizado llamado start-dev, puedes ejecutarlo con el comando npm run start-dev.

# Dependencias
Las dependencias siempre estan instaladas en packgage.json del proyecto

npm i          # Puedes recuperar node_modules y package-lock.json con el archivo package.json
npm install    # Puedes recuperar node_modules y package-lock.json con el archivo package.json
npm update     # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan
npm update -g  # Actualiza todos las dependencias globales

npm install --save-dev nodemon  # Instalamos nodemon como dependencia de desarrollo, --save para indicarle que sea dependencia del proyecto y -dev para indicarle que sea dependencia de desarrollo
npm i body-parser               # Instalamos body-parser        ---> Se encarga de recibir una peticion HTTP normal, se encarga tomar toda esa información, la informacion del body y convertirla a JSON
npm i connect-multiparty        # Instalamos connect-multiparty ---> Permite subir archivos al backend
npm i express                   # Instalamos express            ---> Framework que funciona sobre NodeJS, que se encarga de todas las peticiones HTTP, framework backend que se encarga de hacerlo todo, si queremos hacer una API o una aplicacion completa con Node, necesitamos Express
npm i mongoose                  # Instalamos mongoose           ---> Es un ORM, una herramienta de modelado de objetos, diseñada para trabajar con MongoDB
npm i validator                 # Instalamos validator          ---> Validar datos, validar email, string, numero, cosas asi
```



## Cambios de versión de Node

En esta seccion pondremos cambios de versión de Node:

### Node 8.9.4 a Node 18.14.0 (7-backend-nodejs-two)
### Node 10.16.0 a Node 18.14.0 (3-api-rest-node-two, seccion-07-node)

::: details Notas
1. Cuando realice este cambio ocurrio el error
	```bash
	[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
	```
	1. Busque el error, me llevo a esta pagina
    	* https://stackoverflow.com/questions/57895175/server-discovery-and-monitoring-engine-is-deprecated

2. Cuando realice este cambio ocurrio el error
	```bash
	MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
	```
	1. Busque el error, me llevo a esta pagina
		* https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017

3. Cuando realice este cambio ocurrio el error (Error al guardar, Cambio de versión de Mongoose 6 a Mongoose 7)
	```bash
	throw new MongooseError('Model.prototype.save() no longer accepts a callback') MongooseError: Model.prototype.save() no longer accepts a callback
	```
	1. Busque el error, me llevo a esta pagina
		* https://ed.team/comunidad/error-al-guardar
:::
