// server/src/server.js

const app = require('./app'); // Import your Express application instance
const mongoose = require('mongoose');

// Define the port for the server
const PORT = process.env.PORT || 5000;

// Define your MongoDB connection string (replace with your actual DB URL)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern_db'; 

// 1. Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully.');
    
    // 2. Start the Express Server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  });