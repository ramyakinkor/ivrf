#!/bin/bash

installNginx() {
	echo "------ nginx installation started -------"
	apt install nginx
	ufw allow 'Nginx HTTPS'
	ufw status
	echo "------ nginx installation successfull ok ... -----"
}

installNginx
