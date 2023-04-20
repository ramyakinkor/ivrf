#!/bin/bash

installNodejsAndNpm() {
	curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
	echo "-------- nodejs installation started... ----------"
	apt -y install nodejs
	echo "node version:"
	node -v
	echo "-------- nodejs installation sucesfull ok... -----"
}

installNodejsAndNpm
