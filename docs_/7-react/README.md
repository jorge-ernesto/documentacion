# 7 React

Podemos entrar a la web oficial de [React](https://es.reactjs.org/)<br>
Podemos entrar a la web oficial de [create-react-app](https://github.com/facebook/create-react-app) en GitHub<br>
Podemos entrar a la web oficial de [create-react-app](https://create-react-app.dev/)<br>
Podemos entrar a la web oficial de [Node](https://nodejs.org/es/)<br>
Podemos entrar a la web oficial de [NPM](https://www.npmjs.com/)

## ¿Qué es React?

::: tip Aviso
**Master en Frameworks JavaScript: Aprende Angular, React, Vue**
* Podemos entrar al video ["148. React - Introducción a esta sección - ¿Que aprenderás?" creado por Victor Robles sobre React](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15380910#overview)

:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Instalamos React](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15527506#overview) ---> Master en Frameworks JavaScript: Aprende Angular, React, Vue
* [Instalamos React](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15527506#overview) ---> Master en Frameworks JavaScript: Aprende Angular, React, Vue
* [Instalamos React](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15527506#overview) ---> Master en Frameworks JavaScript: Aprende Angular, React, Vue
* [Instalamos React](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15527506#overview) ---> Master en Frameworks JavaScript: Aprende Angular, React, Vue
* [Instalamos React](https://www.udemy.com/course/master-en-frameworks-javascript-aprende-angular-react-vue-js/learn/lecture/15527506#overview) ---> Master en Frameworks JavaScript: Aprende Angular, React, Vue

::: tip Notas de los proyectos
#### <p style="color:green;">Importante: "Two" significa que lo hice yo mismo</p>
:::

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Node
Instalamos [Node](https://nodejs.org/es/) desde su web.<br>
También podemos ver las [Versiones de Node](https://nodejs.org/es/download/releases/) y las [Versiones de React](https://es.reactjs.org/versions)
```bash
node -v
npm -v
```

### Instalamos React
1. Actualizamos **NPM** a su ultima versión, borramos cache y desactivamos auditorias
```bash
npm install -g npm@latest  # NO USAR ESTE COMANDO, sino usar el ejecutable de la web e instalar la versión que necesites o la version LTS (El ejecutable instala Node y la version de NPM con la que viene)
npm cache clean --force
npm cache verify & npm cache clear --force
npm set audit false
```

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

# Verificar instalación de create-react-app
create-react-app --version
create-react-app
```



### aprendiendo-react-two (master-frameworks-javascript)
::: tip Notas de la instalación
* Cuando cree este proyecto lo hice con **Node 18.14.0** instala **NPM 9.3.1**
* Cuando cree este proyecto lo hice con **creact-react-app 5.0.1**
:::

* [Instalamos react-router-dom](https://www.npmjs.com/package/react-router-dom)
* [Instalamos axios](https://www.npmjs.com/package/axios)
* [Instalamos react-moment](https://www.npmjs.com/package/react-moment)
* [Instalamos simple-react-validator](https://www.npmjs.com/package/simple-react-validator)
* [Instalamos sweetalert](https://www.npmjs.com/package/sweetalert)
* [Intento de error de importación: 'Switch' no se exporta desde 'react-router-dom'](https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom)
* [ReactJS: accesorio desconocido 'activeClassName' en la etiqueta 'a'. Eliminar este apoyo del elemento](https://stackoverflow.com/questions/43146460/reactjs-unknown-prop-activeclassname-on-a-tag-remove-this-prop-from-the-e)
* [constructor()](https://es.reactjs.org/docs/react-component.html#constructor)
* [Obtenga parámetros de URL en ReactJS cuando use el componente de clase](https://stackoverflow.com/questions/71715111/get-url-params-in-reactjs-when-using-class-component)
* [exportar 'withRouter' (importado como 'withRouter') no se encontró en 'react-router'](https://www.datainfinities.com/39/export-withrouter-was-not-found-in-react-router)
* [Cómo acceder a los parámetros de URL en el componente de clase usando React Router v6](https://www.cluemediator.com/how-to-access-url-parameters-in-the-class-component-using-react-router-v6)

```
create-react-app aprendiendo-react-two  # Creamos el proyecto
npm start                               # Levantamos el proyecto

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
