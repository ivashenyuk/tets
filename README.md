# tets
test for MagneticOne Group


1) Перейти /var/www/
2) Створити папку "test.localhost" і перейти в цю папку
3) В терміналі з цієї папки виконати команду "git clone https://github.com/ivashenyuk/tets.git"
4) Перейти /etc/apache2/sites-available
5) Вставити файл "test.localhost.conf"(лежить в корені проекту)
6) В терміналі виконати команди "sudo a2ensite test.localhost.conf" і "sudo service apache2 restart"
7) В адресний рядок браузера вставити "http://test.localhost"
