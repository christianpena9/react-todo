# React Todo App
## Getting started with Node/Webpack/Nodemon project builder

### 1. Install the proper NodeJS version for your OS.

    http://nodejs.org/

### 1. Install Webpack globally:
    % sudo npm install -g webpack@1.12.13

### 2. If you get the follow Error: Cannot find module 'webpack', do the following

    % sudo npm link webpack

### 3. Make sure to bundle files with webpack:
    webpack -w

### 4. Install Nodemon globally:
    % sudo npm install -g nodemon

### 5. Make sure to run the nodemon server locally:
    nodemon server.js

### 6. If you get the following Error: listen EADDRINUSE :::3000, do the following
First get the process ID (PID) of the process running on port 3000:
    % lsof -i tcp:3000
    % kill -9 [process ID]
