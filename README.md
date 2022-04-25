# Website Boilerplate

Hey Everyone! I thought that this boilerplate for a simple website would be useful for people doing some web development, and I thought I would create the boilerplate I use and post it so others can also use this, everyone is free to fork and use this boilerplate however!

## Languages and Programs used

- Javascript
- Node.js
- Nodemon
- Sass
- Express
- Handlebars
- Express-Handlebars

## What to have before you use this boilerplate

1. [Visual Studio Code](https://code.visualstudio.com/download)
2. [Node.js](https://nodejs.org/)
3. Any online browser to see localhost

## What to run in terminal once you get the code

When you get into VSC and in the folder containing the `server.js` file there are a few lines of commands you need to run to get this to work.
1. Installing the Node.js into the server:
```npm install```
2. If you want to reset the `package.json` file you can run this command, just make sure that you set one of the scripts to run the server (I use this one `"start": "nodemon server.js"`):
```npm init```
3. Install nodemon to make server development faster, this automatically resets the server once a file is saved so the server does not need to be turned off and turned on again:
```npm install nodemon```
4. Installing Express for the server:
```npm install express```
5. Installing Handlebars for the server:
```npm install handlebars```
6. Install SASS for the server:
```npm install -g sass```
> Note for Sass: 
> I recomend downloading the Live SASS Compiler when developeming with SASS when you have it running in VSC. If you don't want to run with that extra program, whenever you save the sass file run
> ```sass styles.sass:styles.css```  
> when in the styles folder.
7. Install Express-Handlebars for the server:
```npm install express-handlebars```

## When running the server
You can run the server in the terminal with ```nodemon server.js``` or if you have the script set (it is set in the code) you can use ```npm start```.
Once the server is running you can go on your online browser and go to http://localhost:8000/ and see the server going!!
