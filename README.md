# Node.js Sequelize TODO list

This is a simple TODO list website (without user sessions) for an example of utilising MySQL with Sequalize. Users can create new TODO lists, add tasks, delete tasks and delete TODO lists.

It uses **MySQL** for persistant storage; using the node module **mysql** as the MySQL driver. It uses **sequelize** as the database API, enabling straight forward database setup amongst other features. **Jade** is used for the view template engine, **express** for the web framework and also the useful **body-parser** middleware.

Make sure to have MySQL installed on your machine. Installing MySQL CLI is easy on Mac OS X using [brew](http://brew.sh/).

1. Start up `mysql` on **port 3306**
2. `cd` into the project directory and run `npm install`
3. run `node server`
4. load up http://localhost:3000
5. create a new TODO list, add some tasks, delete a task, etc.

It's a nice introduction to Node JS with MySQL, leveraging the very useful sequelize node module.
