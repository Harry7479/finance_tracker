
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const sequelize = require('./config/db.js');


const app = express();




app.use(helmet());

// app.use(cors({
//   origin: [
//     "http://localhost:5173",                    
//     "https://finance-manager-qudh.vercel.app"          
//   ],
//   credentials: true
// }));


app.use(morgan('dev'));


app.use(express.json());


const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests, please try again later.'
});
app.use('/api/', apiLimiter);




app.get('/', (req, res) => res.send('Finance Tracker API Running'));


sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('DB sync error:', err));

module.exports = app;