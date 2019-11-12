# FoodRocket

## Requirements

- Node.js & NPM v8.4.0
- Mongo 2.2.3

## Run

- Run `npm install` to install dependencies

## Test

- Run server before test
- Run `npm t`

## Documentation

- MVC architecture is followed
- services list down all the modules/queries that require some validation of user input.
- Routes handle all the routes
- Middleware validates the request. There are 2 middlewares currently
  - To check whether a particular schema is followed by request or not
  - To check whether user is admin or not
- Repositories handle all the data modification for particular collection
- Model represents shape of the data and business logic. It maintains the data of the application.
