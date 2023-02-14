# did-i-need-that

## Description
This is a web application created using the Model, View, Controller paradigm. This site is currently hosted on Heroku at [Heroku](https://did-i-need-that.herokuapp.com/) and can also be locally run using the files located in the [GitHub](https://github.com/llangerud/did-i-need-that) repo. To learn how to run this application please continue to the [Installation](#installation) and [Usage](#usage) sections.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
1. Navigate to the GitHub repository ( https://github.com/llangerud/did-i-need-that ) in your browser and click the green dropdown menu that says "Code". Cope the SSH key to your clipboard and then open your terminal.
2. In the terminal navigate to the directory you wish to house the repo.
3. Type "git clone" and paste the SSH key and hit enter.
4. Since the application uses Node.js you will need to have Node installed on your computer. For detailed instructions on how to install please visit: https://www.guru99.com/download-install-node-js.html
5. Once Node is installed navigate to the projects root directory in VS Code and right click and select "Open in Intergrated Terminal".
6. Type "npm i" to install all the proper dependacies.
7. Once the repo is cloned and all node dependacies are downloaded you are ready to run the server locally! The [Usage](#usage) section will have instructions on how to properly set up and seed the database.

## Usage
With the dint app users can easily track their spending habits of their impulse buys. Our app allows users, once signed up to add data to their purchases such as the price and how often the purchase has been used. Users will also be emailed a few weeks after the purchase was made to update the usefulness of the product, thus helping the user decided whether they did(or did not) need that.

If you wish to run the server locally you must first create and seed your database, before being able to do so you must create your .env file.

Right click in the root directory and add "New File". Name your new file ".env" and populate it with the following information:

DB_NAME=tech_blog_db

DB_USER='your mysql username'

DB_PW='your mysql password'

Once your .env file has been created you will be able to run the source command in mysql. Log into mysql by entering the command "mysql -u 'your mysql username' -p" then enter your mysql password. Once you are logged in run the command "source db/schema.sql". When it is finished with no errors you can quit out of mysql by running the command "exit".

Now you have successfully sourced your database, in the root directory terminal run the command "npm run seed".

After your database is seeded you will be able to start the server. Run the command "node server.js". Now you can navigate to [http://localhost:3001/](http://localhost:3001/) in your browser. This will take your to the homepage of the application. To view the app in its current deployed state visit [Heroku](https://did-i-need-that.herokuapp.com/).

Here are some screenshots to demonstrate the functionality and show the rendered page.

Homepage Logged Out:![Image](public\assets\HomepageLoggedOut.jpg)

Homepage Logged In:![Image](public\assets\HomepageLoggedIn.jpg)

Dashboard:![Image](public\assets\Dashboard.jpg)

Login:![Image](public\assets\Login.jpg)

Purchases:![Image](public\assets\Purchases.jpg)

Signup:![Image](public\assets\Signup.jpg)

## Credits
[Lily](https://github.com/llangerud)
[Carrie](https://github.com/CarrieLJ)
[Krister](https://github.com/kristermyr)
[Ben](https://github.com/Benmarz10)

This application uses express, handlebars, sequelize, and node.

## License
![License](https://img.shields.io/badge/License-MIT-yellow.svg)
This project is under MIT license

## Tests
To test this application you can run the server locally or navigate to the [Heroku](https://did-i-need-that.herokuapp.com/).