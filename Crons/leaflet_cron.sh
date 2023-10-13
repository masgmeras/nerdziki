#!/bin/bash
#
python3 leaflet_generator.py
echo "RUN new leaflets generation finished"

#
ps aux  |  grep -i 'server_gazetek.js'  |  awk '{print $2}'  |  xargs sudo kill -9
echo "Kill server server_gazetek.js"

# RENAME File
mv new_generate_urls.json generate_urls.json

#
nohup node server_gazetek.js &
echo "RUN server server_gazetek.js"



## USAGE EXAMPLE
# This is a simple Bash script
# Prompt the user for their name
#echo "Hello! What is your name?"
#jsName = 'server_gazetek.js'
# Read user input into a variable
#read name
#0 0 * * *
# */1 * * * * ./leaflet_cron.sh
# crontab -l
# Greet the user
#echo $pid
# nohup node server_gazetek.js &
# ps aux | grep node
# crontab -l