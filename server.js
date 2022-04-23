const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

dotenv.config();
// Express Application initialization
const app = express();
// Application server port initialization
const port = process.env.PORT || 4001;
// Database connection
connectDB();
// Application middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// Application endpoint
app.use('/api', require('./routes/product.route'));

app.listen(port, () => console.log(`Listening on port ${port}`));
