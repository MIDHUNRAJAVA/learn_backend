// Load env variables
if(process.env.NODE_ENV != "production")
    {
        require("dotenv").config();
    }
    const mongoose = require('mongoose');
    // console.log('DB URL:', process.env.DB_URL); // Log the DB_URL to check if it's correctly read

    async function connectDb() {
        try {
            await mongoose.connect(process.env.DB_URL
                // ,{
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true,
            //     serverSelectionTimeoutMS: 5000 
            // }
            );
            console.log('Connected to MongoDB:', process.env.DB_URL);
        } catch (err) {
            console.error('Error connecting to MongoDB:', err.message); // Add err.message to see specific error
        }
    }
    

module.exports = connectDb;
