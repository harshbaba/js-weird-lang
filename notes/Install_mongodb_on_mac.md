Install mongo db

1. First Install Homebrew by paste this command in terminal:
    (Skip this if you have already installed homebrew)

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

    https://brew.sh/#install

2. brew tap mongodb/brew

3. brew update

4. brew install mongodb-community@4.2


## Reference Link
https://www.mongodb.com/docs/v4.2/tutorial/install-mongodb-on-os-x/

New

https://www.mongodb.com/try/download/community
download tgz file

Double click on tgz to extract

then open new terminal and move that folder outside from download (in root)
mv Downloads/mongodb-macos-x86_64-6.0.5 .

rename this mongodb-macos-x86_64-6.0.5 to mongodb
mv mongodb-macos-x86_64-6.0.5/ mongodb

use cd command and go inside mongodb folder
cd mongodb

run ls -ltrh to see files

create data direcory
mkdir data

go inside data directory and create db folder
cd data
then mkdir db

go back to bin folder
cd ..

go inside bin folder
cd bin

run this command:
./mongod --help | grep -i data

a dialogue can open related to permission

go to system prefernces then settings& privacy tab and click on
allow anyway

set dbpath:
./mongod --dbpath ~/../../Users/harshmacbook/mongodb/data/db

after run this command your server will up without any issues.

for exit you can run ctrl+c

go outside from bin 
cd ..

create logs folder
mkdir logs

again go to bin folder
cd bin

Redirect logs to log folder and use 2>&1 for errors as well and in last & for run this in background
./mongod --dbpath ~/../../Users/harshmacbook/mongodb/data/db > ~/../../Users/harshmacbook/mongodb/logs/mongod.log 2>&1 & 

for verify:
ps -efww | grep mongod

cd ../logs

run ls -ltrh
you will see mongod.log

use the less command to verify seerver logs are written
less mongod.log

then enter q and exit

go to
cd ../bin

then hit ./mongos (./mongos for above version then 5)
(below version then 6 use ./mongo)

after hitting ./mongos
go to system prefernce and setting/privacy and allow anyway

https://www.youtube.com/watch?v=p2EQUrA6SjU




