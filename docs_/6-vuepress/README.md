# 6 VuePress

Podemos entrar a la web oficial de [VuePress](https://vuepress.vuejs.org/)<br>
Podemos entrar a la web oficial de [Markdown](https://programminghistorian.org/es/lecciones/introduccion-a-markdown)<br>
Repositorios de Github: [Bluuweb](https://github.com/bluuweb), [Jorge Ernesto](https://github.com/jorge-ernesto)

## ¿Qué es VuePress?

::: tip Aviso
Según [Stack Overflow](https://stackoverflow.com/tags/vuepress/info): **VuePress es un generador de sitios estáticos impulsado por Vue.**

VuePress es un generador de documentos minimalista con un sistema de diseño basado en componentes Vue.

Entre otras características, tiene extensiones de rebajas integradas optimizadas para documentación técnica y la capacidad de aprovechar Vue dentro de los archivos de rebajas.

* Official docs: [VuePress](https://vuepress.vuejs.org/)<br>
* Official repo: [Github](https://github.com/vuejs/vuepress)

<hr style="height: 5px; background-color: #42b983;">

Podemos entrar al [video creado por Bluuweb sobre VuePress](https://www.youtube.com/watch?v=o334x1W_RDY) donde explica que es VuePress, como instalarlo y como usarlo<br> 

* Notas:
    1. La explicacion del video de Blogbluuweb es que se utilice ``npm install -g vuepress`` y luego verificar la instalacion con ``vuepress -V``<br>

    2. Si queremos desinstalar la dependencia global podemos usar ``npm uninstall -g vuepress``<br>
    [Desinstalar dependencia global](https://qastack.mx/programming/13066532/how-to-uninstall-npm-modules-in-node-js#:~:text=En%20caso%20de%20que%20sea,g%20uninstall%20.&text=Si%20desea%20desinstalar%20varios%20m%C3%B3dulos,ejecute%20el%20comando%20npm%20install%20.)

    3. Sin embargo la documentacion oficial de VuePress indica que usemos ``npm install -D vuepress``, esto instala localmente la dependencia por carpeta<br>
    [Instalacion Manual (Aqui crea por defecto el repositorio con el nombre "vuepress-starter" e instala localmente la dependencia de VuePress)](https://vuepress.vuejs.org/guide/getting-started.html#manual-installation)

<hr style="height: 5px; background-color: #42b983;">

Los repositorios usados en la carpeta ``aprendiendo_vuepress`` vienen de:<br>

* 1-vuepress-starter -> [video creado por Bluuweb sobre VuePress](https://www.youtube.com/watch?v=o334x1W_RDY)
* 2-tutorial-github -> [https://github.com/bluuweb/tutorial-github](https://github.com/bluuweb/tutorial-github)
* 3-tutorial-laravel -> [https://github.com/bluuweb/tutorial-laravel](https://github.com/bluuweb/tutorial-laravel)
* 4-documentacion -> Copia de 3-tutorial-laravel

:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Prerrequisitos](https://vuepress.vuejs.org/guide/getting-started.html#prerequisites)<br>
* [Instalacion Manual (Aqui crea por defecto el repositorio con el nombre "vuepress-starter" e instala localmente la dependencia de VuePress)](https://vuepress.vuejs.org/guide/getting-started.html#manual-installation)<br>
* [Estructura del directorio](https://vuepress.vuejs.org/guide/directory-structure.html#directory-structure)<br>
* [Configuracion](https://vuepress.vuejs.org/guide/basic-config.html#configuration)<br>
* [Tema por defecto](https://vuepress.vuejs.org/theme/default-theme-config.html#default-theme-config)<br>

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Creacion de repositorio

Para crear un nuevo repositorio VuePress comunmente tendriamos que ver los enlaces de [Enlaces utiles](/vuepress/#enlaces-utiles), sin embargo algo que podemos hacer es:
1. Copiar una carpeta ya creada, yo uso el repositorio `3-tutorial-laravel` ubicado en la carpeta `aprendiendo-vuepress`
2. Eliminamos la carpeta `node_modules`
2. Eliminamos la carpeta `docs`
2. Eliminamos la carpeta `.git`
3. Iniciamos el archivo de configuracion de git con el comando `git init`
4. Cambiamos el nombre del proyecto en `package.json`
5. Modificación del titulo del proyecto en `config.js`
6. Creación y/o modificación de vistas posteriores

Para iniciar el proyecto localmente, ejecuto el comando de `package.json`:
```bash
npm run docs:dev
```

Para compilar el proyecto y obtener el repositorio en HTML y JavaScript, ejecuto el comando de `package.json`:
```bash
npm run docs:build
```

### Despliegue en Github

Si queremos enviar a producción, es decir al repositorio Github:
1. Cambiamos la ruta `base` a la ruta para producción que se encuentra en `config.js` (Esta ruta se ejecuta cuando ejecutamos `npm run docs:dev`, y sirve para crear los enlaces cuando ejecutamos `npm run docs:build`)
2. Creamos carpeta `docs`
3. Ejecutamos `npm run docs:build`
4. Movemos todo el contenido de la carpeta `dist` a `docs`

## Cambios de versión de Node

En esta seccion pondremos cambios de versión de Node:

### Node 12.11.1 a Node 18.14.0 (1-vuepress-starter, 2-tutorial-github, 3-tutorial-laravel, 4-documentacion)

::: details Notas
1. Cuando realice este cambio ocurrio el error
    ```bash
    D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion>npm run docs:dev

    > 4-documentacion@1.0.0 docs:dev
    > vuepress dev docs_

    wait Extracting site metadata...
    tip Apply theme @vuepress/theme-default ...
    tip Apply plugin container (i.e. "vuepress-plugin-container") ...
    tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
    tip Apply plugin @vuepress/active-header-links (i.e. "@vuepress/plugin-active-header-links") ...
    tip Apply plugin @vuepress/search (i.e. "@vuepress/plugin-search") ...
    tip Apply plugin @vuepress/nprogress (i.e. "@vuepress/plugin-nprogress") ...

    * Client █████████████████████████ building (40%) 1/2 modules 1 active
    node_modules\webpack-dev-server\client\index.js

    i ｢wds｣: Project is running at http://0.0.0.0:8081/
    i ｢wds｣: webpack output is served from /dist-vuepress/4-documentacion/
    i ｢wds｣: Content not from webpack is served from D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\docs_\.vuepress\public
    i ｢wds｣: 404s will fallback to /index.html
    node:internal/crypto/hash:71
    this[kHandle] = new _Hash(algorithm, xofLen);
                    ^

    Error: error:0308010C:digital envelope routines::unsupported
        at new Hash (node:internal/crypto/hash:71:19)
        at Object.createHash (node:crypto:133:10)
        at module.exports (D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\webpack\lib\util\createHash.js:135:53)
        at NormalModule._initBuildHash (D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\webpack\lib\NormalModule.js:417:16)
        at handleParseError (D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\webpack\lib\NormalModule.js:471:10)
        at D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\webpack\lib\NormalModule.js:503:5
        at D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\webpack\lib\NormalModule.js:358:12
        at D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\loader-runner\lib\LoaderRunner.js:373:3
        at iterateNormalLoaders (D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\loader-runner\lib\LoaderRunner.js:214:10)
        at Array.<anonymous> (D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\loader-runner\lib\LoaderRunner.js:205:4)
        at Storage.finished (D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:55:16)
        at D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:91:9
        at D:\PORTABLES\laragon\www\9 KKK\1 VuePress\aprendiendo-vuepress\4-documentacion\node_modules\graceful-fs\graceful-fs.js:123:16
        at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3) {
    opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
    library: 'digital envelope routines',
    reason: 'unsupported',
    code: 'ERR_OSSL_EVP_UNSUPPORTED'
    }

    Node.js v18.14.0
    ```
    1. Busque el error `Error: error:0308010C:digital envelope routines::unsupported`, me llevo a esta pagina
        * https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
    2. Busque el error `opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ]`, me llevo a esta pagina
        * https://stackoverflow.com/questions/69665222/node-js-17-0-1-gatsby-error-digital-envelope-routinesunsupported-err-os
    3. Mi solucion fue cambiar en `package.json` `"docs:dev": "vuepress dev docs_"` por `"docs:dev": "set NODE_OPTIONS=--openssl-legacy-provider && vuepress dev docs_"`
    4. Recordar que usamos `set NODE_OPTIONS=--openssl-legacy-provider` porque es Windows. Si fuera Linux usariamos `export NODE_OPTIONS=--openssl-legacy-provider`
:::
