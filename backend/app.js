
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const sequelize = require('./config/db.js');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const setupSwagger = require('./config/swagger');


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

//routes
app.use('/api/', apiLimiter);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api', dashboardRoutes);

// Setup Swagger
setupSwagger(app);




app.get('/', (req, res) => res.send('Finance Tracker API Running'));


sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('DB sync error:', err));

module.exports = app;