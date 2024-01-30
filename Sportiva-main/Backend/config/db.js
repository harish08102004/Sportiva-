const mongoose=require('mongoose');

const mongoDbUrl = process.env.mongoUrl;

const connection = mongoose.connect('mongodb+srv://sample:2GH2Ks2JWYEjlZ4a@cluster0.8uqr7wu.mongodb.net/');

module.exports={connection}
