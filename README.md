# PPiW Shop
Online game store
# Features:

  - Login/Registration validation with password encrypting stored in database as hash
  - Adding items to cart and saving them in session as cookies (currently set to 3 hours)
  - Storing user's orders in database after checking out (contains total price and quantity)
  - Adding comments to products with review rating (1-10) and calculating product's rating depending on total votes of users (user can review product only once)
  - Search bar that allows user to find any game from database
  - Administration panel: managing products, orders and users

### Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

 #### Prerequisites
* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
* [MongoDB](https://docs.mongodb.com/manual/installation/) - NoSQL database server
#### Running application
Open terminal with administrator privileges.
First you have to create database directory:
```sh
cd C:\
md "\data\db"
```
Start MongoDB database:
```sh
"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\db"
```
The --dbpath option points to your database directory.
If the MongoDB database server is running correctly, the Command Interpreter displays:

```sh
[initandlisten] waiting for connections
```
If you want to manage your database you can open mongo shell in another terminal:
```sh
"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
```
At the beginning your database will be empty so you can use product seeder to insert some products.
Remember to replace "project" with your project path!
```sh
$ cd project/seed
$ node product-seeder.js
$ cd ..
```
Now you can start the application:
```sh
$ npm start
```
Open project by navigating to your server address in your preferred browser.

```sh
localhost:3000
```
# Technologies used

* [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
* [MongoDB](https://docs.mongodb.com/manual/installation/) - NoSQL database server
* [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
* [Bootstrap v3.3.7](https://getbootstrap.com/docs/3.3/) - HTML, CSS and JS framework
* [jQuery v3.3.1](https://jquery.com/) - JavaScript library
* [Express](https://expressjs.com/) - Web framework
* [Passport](http://www.passportjs.org/) - Authentication middleware
* [Handlebars.js](https://handlebarsjs.com/) - View engine
* [Morgan](https://www.npmjs.com/package/morgan/v/1.1.1) - Logging middleware
* [csurf](https://www.npmjs.com/package/csurf) - Node.js CSRF protection middleware.
* [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs) - Library to help you hash passwords
