installNpm() {
    apt-get install npm
}
echo "----------------- installing npm -------------"
installNpm

InstallPm2() {
    sudo npm install -g pm2
}

echo " ---------------- installing pm2 ------------"
InstallPm2


installPgMigrate() {
    npm install -g node-pg-migrate
    npm install pg
}
echo "----------- installing Pg-Migrate -------"
installPgMigrate