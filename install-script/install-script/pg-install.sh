#!/bin/sh

installPostgres () {
   echo "postgres installation stared..."
   sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list';
   wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -;
   apt-get update;
   apt-get install postgresql;
   echo "Postgres installaltion successfully..."
   

}

installPostgres
