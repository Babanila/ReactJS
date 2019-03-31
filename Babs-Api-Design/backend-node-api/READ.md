# bab-api

# Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)

## Features

- Search parameter
- Bookmark by ID
- Get all saved Bookmarks

## Requirements

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). MacOS and Linux machines typically have this already installed.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. Make sure to get the latest active LTS version.

## How to start bab-api

- Go to your terminal.
- Locate the downloaded bab-api folder.
- Go into it (e.g `cd bab-api`).
- Run `npm install`.
- To start the server, run `node backendApp.js` on your terminal.

### Usage

To run each endpoint, you need a web browser and already running server.

- Search parameter endpoint

  - Enter a localhost address using port 5000 (e.g http://localhost:5000/defaultWeb/repository_url/query)
  - query represent your search parameter.
  - Example: `http://localhost:5000/defaultWeb/repository_url/baba`
  - In the example above `query = baba`

- Get Bookmark by ID endpoint

  - Enter a localhost address using port 5000 (e.g http://localhost:5000//defaultWeb/repository_bookmark_url/id)
  - id represent your search parameter.
  - Example: `http://localhost:5000/defaultWeb/repository_bookmark_url/43004479`
  - In the example above `repository_id = 43004479`

- Get all saved Bookmarks endpoint

  - Enter a localhost address using port 5000 (e.g http://localhost:5000/defaultWeb/save-repos)
  - Example: `http://localhost:5000/defaultWeb/save-repos`
  - Note: `saved-repos` is the database where all saved bookmark are stored.

### To run unit tests

- From the root folder, run `npm test` or `yarn test` or `jest`
