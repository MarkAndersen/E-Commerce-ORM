# E-Commerce-ORM

## Description:
The purpose of this excercise was to add functionality to starter code in order to create a backend E-COMMERCE-ORM that, utilizing sequelize, can seed a database, and using RESTful routes, can perform CRUD operations on said database. The app utilized model structures with sequelize associations, one-many and many-many to GET model info, POST a new object to that database, update an object via a PUT route, and/or DELETE any object, with a cascading effect if a parent table is deleted. The routes were tested using insomnia core, and the entire app was run using Node.

## Technologies Utilized:
- Javascript
- Node 
- NPM package
- Sequelize
- MySql 2
- Express server
- dotENV for security

## Installation & Use:

### To install necessary packages:
- While in the directory, type in command line: npm i

### To create/seed the database:
- **Be sure to change the .env.EXAMPLE to .env and edit it to fit the login credentials for your local database.**
- Utilize the schema.sql file in the '/db' directory to create the ecommerce_db database shell, then seed the database as follows:
- While in the directory, type in command line: npm run seed

### To start the server:
- While in the directory, type in command line: npm start



## [A video demonstating the routes being tested in Insomnia Core](https://drive.google.com/file/d/1EIxdPY7lOV6sF7YUwqrVdcjRfrNaITqq/view)

## Challenges & Thoughts:
- It seemed my JSON returns may have pulled in redundant data, I am not sure if that was by design due to the starter code or something wrong with my routes/model associations, regardless the routes are functional as is the server. I felt as though this was a good exercise to learn RESTful routes and CRUD operations utilizing express and sequelize. 

## Questions/Links:
https://github.com/MarkAndersen

[Email me](mailto:Mark.Andersen75@gmail.com)
