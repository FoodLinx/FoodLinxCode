# FoodLinx

FoodLinx is an online food delivery software/app. In a world like ours where convenience and time is of the essence, we are a few clicks away from your favourite cuisine on a busy Monday and every other day. We are available 24/7 to provide your craving at 5 minutes dispatch time. We also offer what no other physical store can, variety. We have connected ourselves with over +200 local businesses and independent chefs to bring their product to the general public.

Source Code For FoodLinx ALX SWE Portfolio Project

## Project Structure

1. ~/home folder contains this README.md, .gitignore and a folder "src" that contains the source code
2. The "src" folder has two separate projects. One for the backend (nodejs, express) api and the frontend (reactjs) apps
3. The database will be hosted on an cloud based MongoDB cluster. The connection string to the database will be shared privately via a .env file and not stored on this repo.

## Starter Project

As a basis for this project it will be a simple MERN (MongoDB, Express, React, NodeJS) "Hello world". The backend will contain the nodejs and express server which will retrieve the text "Hello World" and and send it to the react frontend which shall then display it on to the client (browser)

Running the Server

To run the server you must `cd` from the home folder through to the backend-api folder. From there you must install all dependencies using `npm install`. When (or if) all dependencies have been installed you will be able to run the server using `npm start` or `npm run start`. This will give you the output of "Server Running: Port 4000". On your browser navigate to localhost:4000 (or use `curl localhost:4000` on a separate terminal). This will return the `{"messagae": "Hello World!"}`

The MongoDB Database

The database is hosted on MongoDB free tier online server. The connection string to the database is called from the .env file which is must not be posted in this repo but must remain on our local PCs. Both the username and password are encoded into the connection string. The developer does not need to complete any further steps to be able to connect the database.

Making Requests (using curl)

Home Route (/) - `curl localhost:4000/`

Api Routes
Get all messages (/api/) - `curl localhost:4000/api/`
Get message by Id (/api/:id) - `curl localhost:4000/api/647de7e64953c2866910dc58` replace id "647de7e64953c2866910dc58" with any other id
Post message (/api/) - `curl -d '{"message": "Write your message here"}' -H 'Content-Type: application/json' localhost:4000/api/`
