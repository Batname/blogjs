# BlogJS


## Description

BlogJS is a simple blog application built with AngularJS, Node.js and MongoDB. Creates your article and shares them in a beautiful minimalistic template.

## Article & Demo

Article: http://www.kdelemme.com/2014/03/09/authentication-with-angularjs-and-a-node-js-rest-api/

Demo: http://projects.kdelemme.com/blog/app/#/

## Features

- [x] Create Article
- [x] Edit Article
- [x] Delete Article
- [x] Add tags to Article
- [x] Add Authentication to the administration
- [x] Add registration for new user
- [x] Handle Logout
- [ ] Add users management
- [x] Add Like to post
- [ ] Add Comments to post
- [ ] Add Like to comment


## Dependencies

You need `redis-2.8.9` up and running on port `6379`

You need `mongodb-2.4.10` up and running on port `27017`

## Installation

Clone the repository with: `kevin@home:/$ git clone https://github.com/kdelemme/blogjs.git`

### Start Redis

Start your redis instance:
check your redis server or
```bash
kevin@home:/var/www/angular/blogjs$ redis-server 
                _._                                                  
           _.-``__ ''-._                                             
      _.-``    `.  `_.  ''-._           Redis 2.8.9 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._                                   
 (    '      ,       .-`  | `,    )     Running in stand alone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 13499
  `-._    `-._  `-./  _.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |           http://redis.io        
  `-._    `-._`-.__.-'_.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |                                  
  `-._    `-._`-.__.-'_.-'    _.-'                                   
      `-._    `-.__.-'    _.-'                                       
          `-._        _.-'                                           
              `-.__.-'                                               

[13499] 12 May 19:22:41.172 # Server started, Redis version 2.8.9
[13499] 12 May 19:22:41.172 * The server is now ready to accept connections on port 6379
```

### Build angularjs app

The build result is already available, but if you want to build it yourself, install gulp and the dependencies, then run it.

install gulp and the gulp dependencies: `kevin@home:/blogjs$ npm install`

Edit app/js/app.js and replace the value of `options.api.base_url` to match your server configuration.

Run gulp to build the scripts of the AngularJS app with: `kevin@home:/blogjs$ gulp`

### Install Nodejs App

Go to the api folder and install the dependencies: `kevin@home:/blogjs/api$ npm install`

Edit api/blog.js and replace the value of Access-Control-Allow-Origin to match your server configuration.

Run the application: `kevin@home:/blogjs/api$ node blog.js`

## Run

gulp

You can now open your browser: `http://localhost/blogjs/app`

Create a first account on `http://localhost/blogjs/app/#/admin/register`

To access the Administration, go to `http://localhost/blogjs/app/#/admin/login`

## Stack

* AngularJS
* Bootstrap
* MongoDB
* Redis
* Node.js
