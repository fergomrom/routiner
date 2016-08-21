# Routiner

Keep a daily schedule can be a hard thing, we all would like to do sport, read or eat properly but at the end we don't do anything. Routiner can help you to write down routines with a given frequency (daily, weekly or monthly) so you can check them as soon as you do them.

![Routiner screenshot](https://github.com/ferkaz/routiner/blob/master/public/img/screenshot1.png?raw=true)

This application is built using AngularJS on the frontend and NodeJS+MongoDB for the backend.

### Installation

First thing, you need a MongoDB running instance. You can find more information about it on [their official website](https://www.mongodb.com/).

In order to install the app, clone the repo and use `npm install`:

```
git clone https://github.com/ferkaz/routiner.git
cd routiner
npm install
```

Then you can check the configuration files on `config/settings.js` where you can set the MongoDB host and port, your time zone or the app port.

```
{
    'appPort': '3000',
    'database': {
        'host': 'localhost',
        'port ': '27017',
        'dbName': 'routiner'
    },
    'timeZone': 'Europe/Madrid'
};
```

You can run the application using npm start:

```
npm start
```

By default it runs on [http://localhost:3000](http://localhost:3000).

### Docker

Routiner can be also run on Docker. After you have cloned the repo, just use Docker Compose and you will have the application running on port 3000:

```
git clone https://github.com/ferkaz/routiner.git
cd routiner
docker-compose up -d
```

Then go to [http://localhost:3000](http://localhost:3000).

Dockerfile was created thanks to [Bitnami Stacksmith](https://stacksmith.bitnami.com/).

### To Do

 - Add a calendar where you can check the routines you did each day
 - Docker MongoDB data persistance
 - Use Travis
 - More...
