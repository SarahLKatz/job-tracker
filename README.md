# Job Tracker

This app is intented for tracking an individual's job search. It is intended to be cloned to your local machine and run locally. This app is **not** intended to be run on a deployed environment.

### The Basics

Before running this app, you will need the following programs installed on your local machine:

* Node.js
* npm or yarn
* PostgreSQL

### Libraries/Frameworks Used

* React (including Hooks!)
* React-Router
* Webpack
* Babel
* Node.js
* Express
* Sequelize
* PostgreSQL

_For more information about what's in this repository, check the package.json!_

### Getting Started

The best way to make this project your own is to fork it and clone your fork down to your local. If you're not much for forking, feel free to just clone this repository - `git clone git@github.com:SarahLKatz/job-tracker.git`  
Once you've got the repository cloned to your local machine, run `yarn install` (or `npm install` if that's your jam).

### Making Changes

With one small exception, most of the code for this repository exists in two folders:  
1 - `client` - This is where the front-end code lives. `routes.js` is where the routing lives, and the components that are displayed with each route are located in the `components` folder. `app.js` is the main app, and is also where some of the data fetching occurs.  
2 - `server` - This is where the api and database information lives. The api is in the `api` folder (go figure), mostly in the `/api/companies.js` file. The database models live in the `db` folder, in a folder called `models`

Styles currently exist in the `/public/styles.css` file. This is not my ideal situation and I am hoping to change this eventually.

### Running the App

You can run the app in development mode using `yarn start-dev` (or `npm run start-dev`).  
You can also choose to run the server and client separately using `yarn start-server` and `yarn build-client` (`npm run start-server`/`npm run build-client`)

### Testing

Enzyme and Mocha are currently installed in the repository, but no tests exist. This is something that is on my to-do list, but if anyone wants to fork the repo, add some tests, and put in a PR, please do - I'd love to have tests in here ASAP! Feel free to include other testing libraries.

### Credit Also Goes To ...

[@FullstackAcademy](https://github.com/FullstackAcademy/) - This project was scaffolded using Fullstack's [Boilermaker](https://github.com/FullstackAcademy/boilermaker)

_Your name could be here too! If you see any issues you want to fix or improvements you want to make, put in a PR and if I see the value of the fix/improvement, I may merge it in and list you here! I would love for this to be a collaborative project, so get in touch if you have some ideas you'd like to see be a part of this._
