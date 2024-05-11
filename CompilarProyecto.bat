@REM Eliminar carpeta docs
rmdir /q /s docs

@REM Crear carpeta docs
mkdir docs

@REM Compilar proyecto para subirlo a GitHub (Produccion)
@REM Copiar y pegar con robocopy
npm run docs:build && robocopy docs_/.vuepress/dist/ docs /e
