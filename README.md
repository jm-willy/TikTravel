## Guía

1. Crear TikTravel en C:\
2. pip install -r requirements.txt
4. npm install vue
5. git clone este proyecto en C:\TikTravel
6. python manage.py makemigrations y luego python manage.py migrate para hacer las tablas de la base de datos
8. npm run dev para hacer el front
9. python manage.py runserver y npm run build para hacer el back

## Documentación de la api
Después de python manage.py runserver busca:
- Endpoints sin autenticación: /api/docs
- Endpoints con autenticación: /api-auth/docs

En los docs se pueden probar los endpoints

### Importante: en vue modo dev la url de la api no es /api, es http://127.0.0.1:8000/api

## Crear entorno virtual python in VS Code

1. ctrl + mayus + p
2. Python: crear entorno
3. En un archivo .py abre nueva terminal, debería aparecer (.venv) al principio de la linea de la consola
4. pip install django
5. pip install django-ninja

## Crear projecto vue en carpeta e iniciarlo
1. npm init vue@latest
2. instalar todo menos tests, jsx y typescript
3. cd nombre del proyecto
4. npm install
5. npm run dev

## Estructura proyecto vue
- proyecto-vue (sin php)
  - public
    - assets (crear esta carpeta y meter todo lo de public)
      - .ico
  - src (resources en tu proyecto)
    - assets
      - .css
      - .jpg
    - components
      - .vue
    - router
      - index.js
    - stores
      - counter.js
    - views
      - .vue
    - App.vue
    - main.js
  - index.html
  - .config.js

## Despliegue
- DEBUG = False
- npm run build
- python manage.py collectstatic
