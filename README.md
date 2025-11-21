# Online-Cafe-website-sem-3-
A full-stack online café ordering system built using React, Node.js, Express, and MongoDB (MongoClient). Includes menu display, cart, orders, login, and contact form features.
☕ The Daily Grind – Online Café Website

A Full-Stack MERN Project (Without Mongoose – Uses MongoClient)

An online café ordering system where users can browse the menu, add items to cart, place orders, send contact messages, mark favorites, and view previous orders.
The project uses React for frontend, Node.js + Express for backend, and MongoDB Compass for the database.

## 🚀 Features
👤 User Features

- User login using name + mobile number

- View café menu with images

-Add items to cart

-Increase/decrease item quantity

-Remove items

-Place orders

-View previous orders

-Add items to favorites

-Contact form (name, email, phone, message)

🛍️ Menu Features

Menu displayed from MongoDB

Uses /images/ stored in React public folder

Insert menu items using insertMany() or /bulk route

📦 Orders

Place an order

Store order with:

items

total price

user name

timestamp

💬 Contact Messages

Contact form entries saved in messages collection

🛠️ Tech Stack
Frontend

React.js

React Router

Axios

Vanilla CSS

Context API (Cart + Favorites)

Backend

Node.js

Express.js

MongoDB Node Driver (MongoClient)

CORS

REST APIs

Database

MongoDB Compass

dailygrind database

Collections:

menu

orders

users

messages
