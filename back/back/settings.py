"""
Django settings for back project.

Generated by 'django-admin startproject' using Django 4.2.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# vue directories
VUE_DIR = BASE_DIR.parent
VUE_DIR = os.path.join(VUE_DIR, 'front')

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-t0ov=_q4)4xrf!r**_w09igw3quu_+f@=lq*uu+6v3*+o^k3(&'

# SECURITY WARNING: don't run with debug turned on in production!
os.environ['DEBUG'] = 'True'

if os.environ['DEBUG'] == 'False':
    DEBUG = False
elif os.environ['DEBUG'] == 'True':
    DEBUG = True
else:
    raise ValueError("os.environ['DEBUG'] must be strings 'True' or 'False'")

ALLOWED_HOSTS = ['tiktravel.herokuapp.com']

########################


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api_auth.apps.ApiAuthConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    "whitenoise.middleware.WhiteNoiseMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'back.urls'

VUE_TEMPLATE_DIR = os.path.join(VUE_DIR, 'dist/')

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [VUE_TEMPLATE_DIR,],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'back.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

# django buscara para recoger estaticos aqui:
STATICFILES_DIRS = (
    os.path.join(VUE_DIR, 'dist/assets/'), # vue output dir for statics, including public/assets,in index: href="/assets/favicon.ico"
)

# en produccion los estaticos tienen que estaran recogidos aqui:
STATIC_ROOT = os.path.join(BASE_DIR, 'assets/')

# igual que el src en index.html de vue, url en la que se sirven los statics
STATIC_URL = 'assets/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Media

# almacen de imagenes
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')

# url en la que se sirven las imagenes
if DEBUG:
    MEDIA_URL = 'media/'
else:
    MEDIA_URL = ''

# if not DEBUG:
#     WHITENOISE_USE_FINDERS = True
#     # MEDIA_URL = ALLOWED_HOSTS[0] + '/' + MEDIA_URL
#     WHITENOISE_ROOT = MEDIA_ROOT
#     STORAGES = {
#         "default": {
#             "BACKEND": "django.core.files.storage.FileSystemStorage",
#         },
#         "staticfiles": {
#             "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
#         },
#     }

# debug only settings
if DEBUG:
    import logging
    from corsheaders.defaults import default_headers
    logging.warning('*** DEBUG = True, insecure settings active ***')
    # REDIRECT_BASE = 'http://localhost:5173/'
    REDIRECT_BASE = 'http://localhost:8000/'
    ALLOWED_HOSTS += ['localhost:8000', 'localhost', '127.0.0.1:8000', '127.0.0.1']
    CSRF_TRUSTED_ORIGINS = ('http://localhost:5173/*', 'http://localhost:5173', 'http://localhost:5173/')
    SESSION_COOKIE_DOMAIN = 'localhost'
    CSRF_COOKIE_DOMAIN = 'localhost'

    #################

    INSTALLED_APPS.insert(0, 'corsheaders',)
    MIDDLEWARE.insert(0, 'corsheaders.middleware.CorsMiddleware')
    CORS_ORIGIN_ALLOW_ALL = True
    CORS_ALLOW_CREDENTIALS = True
    CORS_ALLOW_HEADERS = (*default_headers, 'csrftoken', 'sessionid', 'cookies', 'COOKIE', 'COOKIES', 'Cookie')
else:
    REDIRECT_BASE = 'https://tiktravel.herokuapp.com/' # https://tiktravel.herokuapp.com/, ''