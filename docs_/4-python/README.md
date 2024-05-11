# 4 Python

Podemos entrar a la web oficial de [Python](https://www.python.org/)<br>
Podemos entrar a la web oficial de [PIP](https://pypi.org/)<br>
Podemos entrar a la web oficial de [Django](https://www.djangoproject.com/)<br>
Podemos entrar a la web oficial de [DB Browser for SQLite](https://sqlitebrowser.org/)<br>

## ¿Qué es Python?

::: tip Aviso
Segun [Wikipedia](https://es.wikipedia.org/wiki/Python): **Python es un lenguaje de alto nivel de programación interpretado** cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo, ejemplos: **Instagram, Netflix, Spotify, Panda3D,** entre otros.​ Se trata de un lenguaje de programación **multiparadigma,** ya que soporta parcialmente la **orientación a objetos,** programación imperativa y, en menor medida, **programación funcional.** Es un **lenguaje interpretado, dinámico y multiplataforma.**

Segun [Victor Robles](https://www.udemy.com/course/master-en-python-aprender-python-django-flask-y-tkinter/learn/lecture/18350304#overview): **Python es un lenguaje de programacion interpretado,** es decir no es un lenguaje compilado, es un lenguaje de tipo script, nosotros escribimos nuestros programas, nuestro script y Python lo interpreta y devuelve un resultado o hace la funcionalidad que necesitemos. **Es un lenguaje multiproposito,** podemos crear scripts para servidores, programas de lineas de comando, programas de escritorio, sitios web, aplicaciones web, lo que sea, es un lenguaje de programación que sirve para hacer multitud de tipos de aplicaciones. **Es un lenguaje multiparadigma,** con Python podemos hacer programacion estructurada normal de toda la vida, programación imperativa, programación funcional, y programación orientada a objetos.
:::

## Enlaces utiles

En esta seccion pondremos enlaces utiles:

* [Gitignore for a Django project](https://djangowaves.com/tips-tricks/gitignore-for-a-django-project/)
* [¿Como puedo cambiar el puerto en el que corre Django?](https://platzi.com/discusiones/1318-django/40890-como-puedo-cambiar-el-puerto-en-el-que-corre-django/)
* [Django shortcut functions](https://docs.djangoproject.com/en/4.1/topics/http/shortcuts/)
* [Django template tags and filters](https://docs.djangoproject.com/en/4.1/ref/templates/builtins/)
* [Django models fields](https://docs.djangoproject.com/en/4.1/ref/models/fields/)
* [Django lookup - djangoproject](https://docs.djangoproject.com/en/4.1/ref/models/lookups/) / [Django lookup - w3schools](https://www.w3schools.com/django/django_ref_field_lookups.php)
* [Django Tutorial - w3schools](https://www.w3schools.com/django/index.php)
* [Django form fields](https://docs.djangoproject.com/en/4.1/ref/forms/fields/)
* [Django validators](https://docs.djangoproject.com/en/4.1/ref/validators/)
* [Django messages](https://docs.djangoproject.com/en/4.1/ref/contrib/messages/)
* [Django sessions](https://docs.djangoproject.com/en/4.1/topics/http/sessions/)
* [Django pagination](https://docs.djangoproject.com/en/4.1/topics/pagination/)
* [List Index Out of Range](https://www.freecodecamp.org/news/list-index-out-of-range-python-error-message-solved/)
* [Python: comprobar si elemento o valor existe en lista o arreglo](https://parzibyte.me/blog/2018/04/17/python-comprobar-elemento-valor-existe-lista-arreglo/)
* [Método get() para diccionarios en Python](https://es.acervolima.com/metodo-get-para-diccionarios-en-python/)
* [¿Qué es Null o None en programación?](https://cosasdedevs.com/diccionario-dev/que-es-null-none-programacion/#:~:text=None%20o%20null%20como%20se,de%20esa%20variable%20es%20desconocido.)
* [Metodos magicos en Python](https://www.tutorialsteacher.com/python/magic-methods-in-python)
* [*args y **kwargs en Python. Una explicación y ejemplos de uso](https://j2logo.com/args-y-kwargs-en-python/)
* [Diferencias entre str y repr en Python](https://www.analyticslane.com/2020/07/03/diferencias-entre-str-y-repr-en-python/)
* [La función super en python bien explicada y con ejemplos! -OOP](https://pythones.net/funcion-super-en-python-bien-explicada-ejemplos-oop/)
* [Diferencias entre los métodos y las funciones en Python](https://www.cursosgis.com/diferencias-entre-los-metodos-y-las-funciones-en-python/)
* [Fechas con Python](https://codigofacilito.com/articulos/fechas-python)

## Apuntes varios

En esta seccion pondremos apuntes varios:

### Instalamos Python
Instalamos [Python](https://www.python.org/downloads/) desde su web
::: tip Notas
Recordar que los modulos se pueden descargar desde [PIP](https://pypi.org/)
:::
```bash
python --version
pip --version
```

### Modulos instalados
```bash
# Para poder ver los modulos instalados
# https://byspel.com/como-ver-los-modulos-instalados-en-python/
pip list

# Actualizar PIP
# https://datatofish.com/add-python-to-windows-path/ (Esta url también ayuda a entender como agregar al PATH de Windows, Python y PIP, además de actualizar PIP)
python -m pip install --upgrade pip

# Instalar modulos
pip install <modulo>
# Actualizar modulos
pip install <modulo> --upgrade
# Desinstalar modulos
pip uninstall <modulo>

---- Master en Python ----

# mysql-connector-python
# https://pypi.org/project/mysql-connector-python/
pip install mysql-connector-python

# django
# https://pypi.org/project/Django/
pip install Django

# pylint-django
# https://pypi.org/project/pylint-django/
pip install pylint-django

# django-ckeditor
# https://pypi.org/project/django-ckeditor/
pip install django-ckeditor

# Flask
# https://pypi.org/project/Flask/
pip install Flask

# Flask-MySQLdb
# https://pypi.org/project/Flask-MySQLdb/
pip install Flask-MySQLdb

---- Python SISTEMASUNI ----

# django
# https://pypi.org/project/Django/
pip install Django

# django-crispy-forms
# https://pypi.org/project/django-crispy-forms/
pip install django-crispy-forms

# crispy-bootstrap4
# https://pypi.org/project/crispy-bootstrap4/
pip install crispy-bootstrap4

# crispy-bootstrap5
# https://pypi.org/project/crispy-bootstrap5/
pip install crispy-bootstrap5

# mysql-connector-python
# https://pypi.org/project/mysql-connector-python/
pip install mysql-connector-python

django-widget-tweaks
# https://pypi.org/project/django-widget-tweaks/
pip install django-widget-tweaks

psycopg
# https://pypi.org/project/psycopg/
pip install psycopg

---- Virtualización ----

# virtualenv
# https://pypi.org/project/virtualenv/
pip install virtualenv

---- Python CETAMPUPC ----

# django
# https://pypi.org/project/Django/
pip install Django

# numpy
# https://pypi.org/project/numpy/
pip install numpy

# reportab
# https://pypi.org/project/reportlab/
pip install reportlab

---- prosincodigo ----

# wikipedia
# https://pypi.org/project/wikipedia/
pip install wikipedia

# pyttsx3
# https://pypi.org/project/pyttsx3/
pip install pyttsx3

# Pillow
# https://pypi.org/project/Pillow/
pip install Pillow

---- Python TOTAL ----

---- Instalar bibliotecas externas para Web Scraping ----

# beautifulsoup4
# https://pypi.org/project/beautifulsoup4/
pip install beautifulsoup4

# bs4 (Paquete ficticio administrado por el desarrollador de beautifulsoup4)
# https://pypi.org/project/bs4/
pip install bs4

# lxml
# https://pypi.org/project/lxml/
pip install lxml

# requests
# https://pypi.org/project/requests/
pip install requests

---- Instalar bibliotecas externas para Asistente de Voz ----

# pyttsx3
# https://pypi.org/project/pyttsx3/
pip install pyttsx3

# SpeechRecognition
# https://pypi.org/project/SpeechRecognition/
pip install SpeechRecognition

# PyAudio (SpeechRecognition necesita PyAudio)
# https://pypi.org/project/PyAudio/
pip install PyAudio

# pywhatkit
# https://pypi.org/project/pywhatkit/
pip install pywhatkit

# yfinance
# https://pypi.org/project/yfinance/
pip install yfinance

# pyjokes
# https://pypi.org/project/pyjokes/
pip install pyjokes

---- Convierte tus programas en Archivos Ejecutables (.exe) ----

# pyinstaller
# https://pypi.org/project/pyinstaller/
pip install pyinstaller
```

### Ubicación de los Modulos instalados de Python
```bash
# En general, los paquetes de Python se instalan en la carpeta "site-packages" del entorno de Python en el que se está trabajando. Esta carpeta se crea automáticamente durante la instalación de Python y es específica de cada versión de Python que se tenga instalada en el sistema.
# La ubicación exacta de la carpeta "site-packages" puede variar dependiendo del sistema operativo y de la forma en que se instaló Python. En sistemas Linux y macOS, la carpeta "site-packages" suele encontrarse en la ruta "/usr/lib/pythonX.Y/site-packages", donde "X.Y" representa la versión específica de Python que se tiene instalada. En Windows, la carpeta "site-packages" suele estar ubicada en la ruta "C:\PythonX.Y\Lib\site-packages".
# Para ver la ubicación exacta de la carpeta "site-packages" en su sistema, puede ejecutar el siguiente código en un intérprete de Python:
import site
print(site.getsitepackages())
```

## Django



### AprendiendoDjango
```bash
# Revisar version de Django instalada
python -m django --version
```



```bash
# Crear proyecto nuevo
django-admin startproject AprendiendoDjango

# Gestor de comandos,se ven todos los comando disponibles
python manage.py
python manage.py help

# Genera una base de datos con las funcionalidades que vienen por defecto en Django
# Esto se realizaria al crear el proyecto en Django
python manage.py migrate

# Arrancamos el servidor local y revisamos la web
python manage.py runserver
http://localhost:8000/

# Crear un app en Django
python manage.py startapp appejemplo  # Esta app no se modifico, se creo como referencia para ver como viene un app por defecto
python manage.py startapp miapp

# Crear migraciones
# Obtener los modelos, ver si habia una migracion creada o no y crear un fichero de migraciones
# Para esto el archivo `/AprendiendoDjango/miapp/models.py` debe tener los modelos
# Las migraciones se crean en `/AprendiendoDjango/miapp/migrations`
python manage.py makemigrations

# Verificar si existen migraciones pendientes
# Este comando mostrará una lista de todas las migraciones de su aplicación y mostrará cuáles han sido aplicadas y cuáles están pendientes.
# Existe una tabla que almacena las migraciones aplicadas "django_migrations"
python manage.py showmigrations

# Crear sql de la migracion creada
# No es estrictamente necesario ejecutar el comando, pero puede ser útil en ciertas situaciones.
# Genera el SQL que será utilizado para aplicar la migración a la base de datos.
# Esto puede ser útil para revisar y entender los cambios que se realizarán en la base de datos antes de ejecutar la migración.
python manage.py sqlmigrate miapp 0001

# Ejecutar migracion creada
python manage.py migrate
```



### Panel de Administración de Django
```bash
# Creamos super usuario
python manage.py createsuperuser

# Ingresar al Panel de Administración
http://localhost:8000/admin/
```



### ProyectoDjango
```bash
# Crear proyecto nuevo
django-admin startproject ProyectoDjango

# Gestor de comandos,se ven todos los comando disponibles
python manage.py
python manage.py help

# Genera una base de datos con las funcionalidades que vienen por defecto en Django
# Esto se realizaria al crear el proyecto en Django
python manage.py migrate

# Arrancamos el servidor local y revisamos la web
python manage.py runserver
http://localhost:8000/

# Crear un app en Django
python manage.py startapp appejemplo  # Esta app no se modifico, se creo como referencia para ver como viene un app por defecto
python manage.py startapp mainapp
python manage.py startapp pages
python manage.py startapp blog

# Crear migraciones
python manage.py makemigrations

# Ejecutar migracion creada
python manage.py migrate
```



### ProyectoFlask
```bash
# Arrancamos el servidor local y revisamos la web
python main.py
http://127.0.0.1:5000/
```
