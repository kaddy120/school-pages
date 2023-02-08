# the script cp the site.conf to /etc/apache2/site-available/
# change the site.conf ownership user:group to root:root
# anable the site using a2ensite
# reload apache2

chown root:root $1

domain=$2
siteConfig=$1
host="/etc/hosts"
a2avalsite="/etc/apache2/sites-available/"

mv $1 $a2avalsite 
#
echo ${a2avalsite}$1 

# Ohh! a2ensite search the right directory
a2ensite $1

echo 127.0.0.1 ${domain} >> ${host}
# if statement to run the command below if the one above succedO
systemctl reload apache2.service
