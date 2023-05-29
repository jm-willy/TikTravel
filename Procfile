web: git pull https://github.com/jm-willy/TikTravel.git
web: cd front && npm install
web: cd front && npm run build
web: cd back && python manage.py migrate
web: cd back && python manage.py collectstatic 
web: cd back && python manage.py runserver $PORT