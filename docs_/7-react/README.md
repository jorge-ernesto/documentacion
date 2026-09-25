# 7 React

Podemos entrar a la web oficial de [Pagina de React en Español (React)](https://es.react.dev/)<br />
Podemos entrar a la web oficial de [Pagina de React en Español (Legacy React)](https://es.legacy.reactjs.org/)<br />
Podemos entrar a la web oficial de [Pagina de Vite](https://vitejs.dev/)<br />
Podemos entrar a la web oficial de [Pagina de Create React App](https://create-react-app.dev/)<br />
Podemos entrar a la web oficial de [Node](https://nodejs.org/es/)<br />
Podemos entrar a la web oficial de [NPM](https://www.npmjs.com/)<br />
<hr />
Podemos entrar a la web oficial de [GIPHY](https://giphy.com/)<br />
Podemos entrar a la web oficial de [GIPHY Developers](https://developers.giphy.com/)<br />
Podemos entrar a la web oficial de [Netlify](https://app.netlify.com/)<br />
<hr />
Podemos entrar a la web oficial de [Pagina de React Testing Library](https://testing-library.com/)<br />
Podemos entrar a la web oficial de [Pagina de Jest](https://jestjs.io/)

## ¿Qué es React?

::: tip Aviso
**Master en Frameworks JavaScript: Aprende Angular, React, Vue**
* Podemos entrar al video ["148. React - Introducción a esta sección - ¿Que aprenderás?" creado por Victor Robles sobre React](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15380910#overview)

**Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+**
* Podemos entrar al video ["1. Introducción al curso maestro de React paso a paso" creado por Victor Robles sobre React](https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/learn/lecture/30435892#overview)
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [151. Instalar ReactJS](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15527506#overview) ----> Master en Frameworks JavaScript: Aprende Angular, React, Vue
----
* [20. Instalar React y crear el primero proyecto](https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/learn/lecture/31224020#overview) ----> Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+
* [21. Plugin para navegadores](https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/learn/lecture/31224030#overview) ----> Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+
----
* [4. Instalaciones necesarias y recomendadas](https://www.udemy.com/course/react-cero-experto/learn/lecture/19606276#overview) ----> React: De cero a experto ( Hooks y MERN )
    * [Instalaciones-React.md](https://gist.github.com/Klerith/4a4abfd88a88b2d1f16efd95fea41362)
* [9. Primeros pasos en React](https://www.udemy.com/course/react-cero-experto/learn/lecture/19612932#overview) ----> React: De cero a experto ( Hooks y MERN )
    * [react-index.html](https://gist.github.com/Klerith/b0111f52ba16451d095f38d4c995605b)
* [10. Introducción a Babel](https://www.udemy.com/course/react-cero-experto/learn/lecture/19613656#overview) ----> React: De cero a experto ( Hooks y MERN )
    * [Babel](https://babeljs.io/)
* [13. Inicio de proyecto - Bases de JavaScript](https://www.udemy.com/course/react-cero-experto/learn/lecture/19616382#overview) ----> React: De cero a experto ( Hooks y MERN )

::: tip Notas de los proyectos
#### <p style="color:green;">Importante: "Two" significa que lo hice yo mismo</p>
:::

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Node
Instalamos [Node](https://nodejs.org/es/) desde su web<br />
También podemos ver las [Versiones de Node](https://nodejs.org/es/download/releases/) y las [Versiones de React](https://es.reactjs.org/versions)
```bash
node -v
npm -v
```

### Instalamos React
1. Instalamos **NPM**, borramos cache y desactivamos auditorias
```bash
npm install -g npm@latest  # NO USAR ESTE COMANDO, sino usar el ejecutable de la web e instalar la versión que necesites o la version LTS (El ejecutable instala Node y la version de NPM con la que viene)
npm cache clean --force
npm cache verify & npm cache clear --force
npm set audit false
```

2. Se usara `npx create-react-app` por lo que no es necesario instalar dependencias globalmente

<!--
2. Desinstalamos versiones anteriores de **create-react-app**, borramos cache
```bash
npm uninstall -g create-react-app
npm cache clean --force                     # Borramos de nuevo la cache para eliminar todos los posibles conflictos que tengamos con npm
npm cache verify & npm cache clear --force  # Borramos la cache, se verifico y se comprimio, se elimino lo que se tuvo que eliminar / Para asegurarnos, borramos la cache, y borramos los paquetes antiguos, borramos lo que tenga que borrar
```

3. Instalamos **create-react-app** en su ultima versión (El paquete que se llama **create-react-app**, es el equivalente a Angular CLI)
```bash
# Intalar la ultima version de create-react-app
npm install -g create-react-app

# Verificar versión de create-react-app (globalmente)
create-react-app --version
create-react-app
```
-->



### aprendiendo-react-two (master-frameworks-javascript)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
:::

* [Instalamos react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [Instalamos axios](https://www.npmjs.com/package/axios)
* [Instalamos react-moment](https://www.npmjs.com/package/react-moment)
* [Instalamos simple-react-validator](https://www.npmjs.com/package/simple-react-validator)
* [Instalamos sweetalert](https://www.npmjs.com/package/sweetalert)
* [Intento de error de importación: 'Switch' no se exporta desde 'react-router-dom'](https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom)
* [ReactJS: accesorio desconocido 'activeClassName' en la etiqueta 'a'. Eliminar este apoyo del elemento](https://stackoverflow.com/questions/43146460/reactjs-unknown-prop-activeclassname-on-a-tag-remove-this-prop-from-the-e)
* [Legacy React - constructor()](https://es.legacy.reactjs.org/docs/react-component.html#constructor)
* [Obtenga parámetros de URL en ReactJS cuando use el componente de clase](https://stackoverflow.com/questions/71715111/get-url-params-in-reactjs-when-using-class-component)
* [exportar 'withRouter' (importado como 'withRouter') no se encontró en 'react-router'](https://www.datainfinities.com/39/export-withrouter-was-not-found-in-react-router)
* [Cómo acceder a los parámetros de URL en el componente de clase usando React Router v6](https://www.cluemediator.com/how-to-access-url-parameters-in-the-class-component-using-react-router-v6)

```
npx create-react-app aprendiendo-react-two  # Crear el proyecto de React sin instalar "create-react-app"

# Aparecera lo siguiente
    Installing packages. This might take a couple of minutes.
    Installing react, react-dom, and react-scripts with cra-template...

# Luego lo siguiente
    cd aprendiendo-react-two
    npm start  # Levantamos el proyecto

# Dependencias
    Las dependencias siempre estan instaladas en packgage.json del proyecto

    npm install  # Puedes recuperar node_modules y package-lock.json con el archivo package.json
    npm update   # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan

    npm i react-router-dom        # Instalamos react-router-dom
    npm i axios                   # Instalamos axios
    npm i react-moment            # Instalamos react-moment
    npm i simple-react-validator  # Instalamos simple-react-validator
    npm i sweetalert              # Instalamos sweetalert

# Componentes
    # Se crean manualmente
```



### 02-intro-javascript-cra (react-cero-experto)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
:::

* Revisar version de React en proyecto `02-intro-javascript-cra`
    * Revisar `package.json` -> dependencies -> react

```
npx create-react-app 02-intro-javascript-cra  # Crear el proyecto de React sin instalar "create-react-app"

# Aparecera lo siguiente
    Installing packages. This might take a couple of minutes.
    Installing react, react-dom, and react-scripts with cra-template...

# Luego lo siguiente
    cd 02-intro-javascript-cra
    npm start  # Levantamos el proyecto

# Dependencias
    Las dependencias siempre estan instaladas en packgage.json del proyecto

    npm install  # Puedes recuperar node_modules y package-lock.json con el archivo package.json
    npm update   # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan

# Componentes
    # Se crean manualmente
```



### 03a-counter-app-vite-pruebas-unitarias (react-cero-experto)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
:::

```
npm create vite  # Crear el proyecto de React sin instalar "vite"

# Aparecera lo siguiente
    √ Project name: ... 03a-counter-app-vite-pruebas-unitarias
    √ Select a framework: » React
    √ Select a variant: » JavaScript

# Luego lo siguiente
    cd 03a-counter-app-vite-pruebas-unitarias
    npm install  # Instalamos dependencias del proyecto
    npm run dev  # Levantamos el proyecto

# Dependencias
    Las dependencias siempre estan instaladas en packgage.json del proyecto

    npm install  # Puedes recuperar node_modules y package-lock.json con el archivo package.json
    npm update   # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan

# Componentes
    # Se crean manualmente
```



### 03b-counter-app-cra-pruebas-unitarias (react-cero-experto)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
:::

```
npx create-react-app 03b-counter-app-cra-pruebas-unitarias  # Crear el proyecto de React sin instalar "create-react-app"

# Aparecera lo siguiente
    Installing packages. This might take a couple of minutes.
    Installing react, react-dom, and react-scripts with cra-template...

# Luego lo siguiente
    cd 03b-counter-app-cra-pruebas-unitarias
    npm start  # Levantamos el proyecto

# Dependencias
    Las dependencias siempre estan instaladas en packgage.json del proyecto

    npm install  # Puedes recuperar node_modules y package-lock.json con el archivo package.json
    npm update   # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan

# Componentes
    # Se crean manualmente
```



### 04-gif-expert-app (react-cero-experto)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
:::

::: tip Documentación
[**Aprende:**](https://es.react.dev/learn)
* **INTRODUCCIÓN**
    * [Tutorial](https://es.react.dev/learn/tutorial-tic-tac-toe)
* **APRENDE REACT**
    * [Responder a eventos](https://es.react.dev/learn/responding-to-events)

[**Referencia:**](https://es.react.dev/reference/react)
* **react@version**
    * [Componentes integrados de React](https://es.react.dev/reference/react/components)
    * [Hooks integrados de React](https://es.react.dev/reference/react/hooks)
* **react-dom@version**
    * [Componentes integrados de React DOM](https://es.react.dev/reference/react-dom/components)
    * [Hooks integrados de React DOM](https://es.react.dev/reference/react-dom/hooks)

**Otros:**
* **Snippets en Visual Studio Code**
    * rafc
    * imr
    * imp
* **CSS en Visual Studio Code**
    * Se puede ordenar las lineas alfabeticamente `CTRL + SHIFT + P` ----> `Ordenar líneas en orden ascendente`
:::

* [Instalamos http-server](https://www.npmjs.com/package/http-server)

```
npm create vite  # Crear el proyecto de React sin instalar "vite"

# Aparecera lo siguiente
    √ Project name: ... 04-gif-expert-app-vite
    √ Select a framework: » React
    √ Select a variant: » JavaScript

# Luego lo siguiente
    cd 04-gif-expert-app-vite
    npm install  # Instalamos dependencias del proyecto
    npm run dev  # Levantamos el proyecto

    # Otros comandos
        npm run build  # Compilamos el proyecto

    # Despliegue a producción rápido
        cd build
        http-server
        http-server -o

# Dependencias
    Las dependencias siempre estan instaladas en packgage.json del proyecto

    npm install  # Puedes recuperar node_modules y package-lock.json con el archivo package.json
    npm update   # Actualizar las dependencias que ya tenga, pero ademas instalara las dependencias que faltan

    npm install -g http-server  # Instalamos http-server ----> Despliegue a producción rápido

# Componentes
    # Se crean manualmente
```
