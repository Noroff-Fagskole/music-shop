# Semester 2 Demo site

Project is using NPM as JS package manager, Strapi as an API and Parcel JS as bundler.

`api` folder is the Strapi backend. The frontend is in the root directory.

## Install Parcel

This will install parcel cli, required to run the frontend.

```bash
npm install -g parcel-bundler
```

## To install and start Strapi API

```bash
cd api
npm install
npm run develop
```

http://localhost:1337/admin

```bash
username: admin@admin.com
password: Pass1234
```

## Start the frontend

### Start with Parcel Js

```bash
npm run develop
```

A Local server will start at [http://localhost:1234/index.html](http://localhost:1234/index.html).

Or use vscode live server, or any npm server you like using, they are static files.
