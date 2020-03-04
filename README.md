# CRUD-A-BURGER
A [Node.js](https://nodejs.org/en/) application using [handlebars](http://handlebarsjs.com/) for the client side frontend, [Express](https://expressjs.com/) for the server side backend, and [MySQL](https://dev.mysql.com/) to manage (**C**reate, **R**ead, **U**pdate, and **D**elete) the relational database.

- - -
## :sparkles: Features
- Lets users input the names of burgers they would like to eat, storing these burgers to the database on submission.
- Displays a list on the left of burgers waiting to be eaten and on the right is a list of burgers that have already been scarfed down!
- Each burger has a profile page accessed by clicking on the burger's name.  The profile page displays the burger object properties in a neat [bootstrap card](https://getbootstrap.com/docs/4.4/components/card/).
- Each burger list item contains a button to "eat" and "delete" the burger.  Once eaten, the burger is moved to the "devoured" list on the right. When the user deletes the burger, it is permanently removed from the database unless requested again!

- - -
## :rocket: Deployment
#### [Heroku](https://www.heroku.com/) - Platform-as-a-Service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.
#### Add-ons:
- [JawsDB MySQL](https://elements.heroku.com/addons/jawsdb) - Database-as-a-Service (DBaaS) provider supplying a fully functional, fully managed, relational database for use with your application providing one-click delivery and management of a relational database in the cloud.

- - -
## :hammer: Tools
#### [npm (node package manager)](https://www.npmjs.com/)
#### Modules:
- [dotenv](https://www.npmjs.com/package/dotenv) - zero-dependency module that loads environment variables from a .env file into process.env (user environment).
- [express](https://www.npmjs.com/package/express) - de facto standard server framework for Node.js designed for building web applications and APIs. 
- [express-handlebars](https://www.npmjs.com/package/express-handlebars) - Handlebars view engine for Express using sensible defaults that leverage the "Express-way" of structuring an app's views making it trivial to use in basic apps.
- [mysql2](https://www.npmjs.com/package/mysql2) - MySQL client for Node.js with focus on performance.
- [sequelize](https://www.npmjs.com/package/sequelize) - promise-based Node.js ORM for Postgres, MySQL, SQLite and Microsoft SQL Server featuring solid transaction support, relations, read replication and more.

- - -
## :fire: Developed by:
- [:octocat:](https://github.com/novakjason) - **[Jason Novak](https://jasonnovak.io)**
