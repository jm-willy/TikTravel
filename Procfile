web: git pull https://github.com/jm-willy/TikTravel.git
web: npm install
web: npm run build
web: cd back && python manage.py migrate
web: cd back && python manage.py collectstatic 
web: cd back && python manage.py runserver 0.0.0.0:$PORT