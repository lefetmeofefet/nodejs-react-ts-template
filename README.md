# NodeJS + React, in TypeScript

A barebones Fullstack Node.js app using [Express](http://expressjs.com/), [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).


## Running Locally

Make sure you have [Node.js](http://nodejs.org/), [Heroku CLI](https://cli.heroku.com/) and [Webpack](https://webpack.js.org) installed.

Next, clone the project, change name in package.json, and run:
 ```
 npm install
 cd frontend && npm install
 cd ..
 npm run watch
 npm run start
 ```

Your app should now be running on [localhost:8081](http://localhost:8081/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
