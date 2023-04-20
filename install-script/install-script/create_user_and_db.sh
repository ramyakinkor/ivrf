#!/bin/bash
PGUSER="stock_image"
PGPASSWORD="st0ck!m@ge"
PGDATABASE="stock_image_db"
createUserAndDb() {
    su postgres psql -c "CREATE USER stock_image WITH encrypted password 'st0ck!m@ge';"
    su postgres psql -c "grant all privileges on database stock_image_db to stock_image;"
    su postgres psql -c "\c stock_image_db"
    su postgres psql -c "GRANT ALL ON SCHEMA public TO stock_image;" # needed since postgres 15
}

createUserAndDb