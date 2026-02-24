# 2 PHP

Podemos entrar a la web oficial de [PHP](https://www.php.net/)<br>
Podemos entrar a la web oficial de [Guía de Estilo para PHP](https://www.mclibre.org/consultar/php/otros/guia-estilo.html)<br>
Podemos entrar a la web oficial de [Composer](https://getcomposer.org/)<br>
Podemos entrar a la web oficial de [Packagist](https://packagist.org/)<br>
Podemos entrar a la web oficial de [SQL Power Architect](https://bestofbi.com/architect-download/)

## ¿Qué es PHP?

::: tip Aviso
Según [PHP](https://www.php.net/manual/es/intro-whatis.php): **PHP (acrónimo recursivo de PHP: `Hypertext Preprocessor`)** es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML.
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* **PHP**
    * [Fatal Error: Allowed Memory Size Exhausted In XAMPP](https://stackoverflow.com/questions/43838591/fatal-error-allowed-memory-size-exhausted-in-xampp)
* **MySQL**
    * [Como Conectar MySQL Desde La Consola En Windows](https://www.discoduroderoer.es/como-conectar-mysql-desde-la-consola-en-windows/)
* **Configurar XAMPP para PostgreSQL**
    * [Configurar XAMPP para PostgreSQL](https://evilnapsis.com/2020/10/07/conectar-una-base-de-datos-postgresql-con-php-y-xampp/)<br>
    * [Cómo listar bases de datos y tablas en PostgreSQL usando psql](https://www.tecno-tips.com/linux/postgresql/listar-bases-de-datos-y-tablas-en-postgresql-usando-psql/)
* **PostgreSQL**
    * [La mejor manera de verificar "valor vacío o nulo" en PostgreSQL](https://www.it-swarm-es.com/es/sql/la-mejor-manera-de-verificar-valor-vacio-o-nulo/1047422568/)

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Composer
Instalamos [Composer](https://getcomposer.org/) desde su web
::: tip Notas
Recordar que los paquetes se pueden descargar desde la opcion `Browse Packages` de la web de [Composer](https://getcomposer.org/) que te lleva a [Packagist](https://packagist.org/)
:::
```bash
composer --version
composer
```

### 7-aprendiendo-librerias-php
::: tip Notas
[Sección 62: Librerías externas para PHP](https://www.udemy.com/course/master-en-php-sql-poo-mvc-laravel-symfony-4-wordpress/learn/lecture/11849656#overview) ----> Master en PHP, SQL, POO, MVC, Laravel, Symfony, WordPress +
:::

* **Html2Pdf:**
    * [Html2Pdf - Packagist](https://packagist.org/packages/spipu/html2pdf)
    * [Html2Pdf - GitHub (Acá se puden descargar ejemplos de como usar la librería)](https://github.com/spipu/html2pdf)
    ```bash
    composer require spipu/html2pdf
    composer update  # Se ejecuta si no tuvieramos la carpeta "vendor" o si actualizamos "composer.json"
    ```

* **Zebra Pagination:**
    * [Zebra Pagination - Packagist](https://packagist.org/packages/stefangabos/zebra_pagination)
    * [Zebra Pagination - GitHub (Acá se puden descargar ejemplos de como usar la librería)](https://github.com/stefangabos/Zebra_Pagination)
    ```bash
    composer require stefangabos/zebra_pagination
    composer update  # Se ejecuta si no tuvieramos la carpeta "vendor" o si actualizamos "composer.json"
    ```

* **PHP Thumb:** Puede ser útil, pero hasta el momento no se encontro utilidad como tal, asi que no se trabajo en [7-aprendiendo-librerias-php](#_7-aprendiendo-librerias-php)
    * [PHP Thumb - Packagist](https://packagist.org/packages/masterexploder/phpthumb)
    * [PHP Thumb - GitHub (Acá se puden descargar ejemplos de como usar la librería)](https://github.com/masterexploder/PHPThumb)
    ```bash
    composer require masterexploder/phpthumb
    composer update  # Se ejecuta si no tuvieramos la carpeta "vendor" o si actualizamos "composer.json"
    ```
* **FirePHP:** Requiere extensión del navegador, lo cual lo hace impráctico, asi que no se trabajo en [7-aprendiendo-librerias-php](#_7-aprendiendo-librerias-php)
    * [FirePHP - Packagist](https://packagist.org/packages/firephp/firephp-core)
    * [FirePHP - GitHub (Acá se puden descargar ejemplos de como usar la librería)](https://github.com/firephp/firephp-core)
    ```bash
    composer require firephp/firephp-core
    composer update  # Se ejecuta si no tuvieramos la carpeta "vendor" o si actualizamos "composer.json"
    ```
