#!/bin/bash
# make sure you have domain connected to your server 

domain="ivrfootage.com"

createFile() {
    file="/etc/nginx/conf.d/www.$domain.conf"
    if [ -e $file ]; then
        echo "File $file already exists!"
        rm $file
    fi
    echo "--------- deleting default file -------------"
    defaultConfFile = "/etc/nginx/sites-enabled/default"
    rm defaultConfFile
    cat > $file << EOF
    server {
        location / {
            proxy_pass http://localhost:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade \$http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host \$host;
            proxy_cache_bypass \$http_upgrade;
        }
        
        server_name $domain www.$domain;
    }
    #for redirecting to https
    server {
        listen 80;
        server_name $domain www.$domain;
        return 301 https://$domain$request_uri;
    }
   
EOF
    echo "www.$domain.conf file created successfully ok... "
}

refreshTlsCertificate() {
    echo "0 12 * * * /usr/bin/certbot renew --quiet" >> /etc/crontab
}

deployTlsCertificate() {
    apt-get install certbot
    apt-get install python3-certbot-nginx
    echo "-------- creating configuartion file ------------"
    createFile
    echo "------------testing config file ----------------"
    nginx -t && nginx -s reload
    echo "---------- finishing testing conf -------"
    echo "---------- obtaining ssl tls certificate ---------"
    certbot --nginx -d $domain -d www.$domain
    echo "adding cron job to refesh tls certificate"
    refreshTlsCertificate
}

deployTlsCertificate
