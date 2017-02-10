# spotitapp

## Introduction
SpotIt is a web app built in Elixir and the [Phoenix Framework](http://www.phoenixframework.org/). Users can post a picture
of anything they spot nearby, such as a yard sale or a food truck, and other users can see the picture and the post pop up in real time on a map. This app is an ongoing project to experiment with the Phoenix/Elixir on the backend
and React (web) and React Native (mobile) on the frontend.

## Tech Stack
- Mapbox API
- Phoenix Framework
- Elixir
- React
- React Native
- PostgreSQL

## Setup Instructions

First, clone this repository `git clone https://github.com/rickypchen/spotitapp.git`

To start this application's server:

1. Go into the server folder where the backend API (Phoenix) lives: `cd server`

2. Install dependencies with `mix deps.get`

3. Install npm packages with `npm install`

4. Create and migrate your database with `mix ecto.create && mix ecto.migrate`

5. Start Phoenix API with `mix phoenix.server`

Next, you can start the application's client:
For the web client (React):

1. Go into the client folder where the frontend clients live: `cd client`

2. Install npm packages with `npm install`

3. Start the client by running `npm start`

4. Now, you can visit `localhost:3000` from your browser

For the mobile client (React Native):
It is currently in development.
