// Install MongoDB locally or create a free cluster on MongoDB Atlas.
// Set up a new Node.js project and install the required dependencies (express, mongoose, dotenv).
// Create a .env file and store your MongoDB connection URI securely.
// Write a connection script in Node.js using Mongoose to connect to MongoDB.
// Define a User schema with fields like name, email, and age.
// Create a simple script to insert a user into the database and log the results in the console.
// Fetch all users from the database and display them in the console
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({ path: __dirname + '/p7.env' });
const app = express()
const port = 3000
const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
        });
    } catch (error) {
        console.log("MONGO_URL from .env:", process.env.MONGO_URL);
        console.log("Error connecting to MongoDB:", error.message);
    }
}
dbconnect();
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})
const User = mongoose.model('User', userSchema);
const user = new User({
    name: "Dev M Shah",
    email: "23it116@charusat.edu.in",
    age: 20
})
user.save().then(() => console.log('User created successfully'));
const fetchUsers = async () => {
    try {
        const users = await User.find();
        console.log(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

// Call the function
fetchUsers();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// export const User = mongoose.model('User', userSchema);