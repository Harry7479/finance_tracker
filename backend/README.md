# Finance Tracker Backend

This is the backend service for the Finance Tracker application. It is built with Node.js, Express, Sequelize (PostgreSQL), and documented using Swagger.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) (or use a cloud-hosted DB like Neon, Supabase, etc.)

## 🚀 Setup Instructions

Follow these steps to get the project running locally:

### 1. Clone/Navigate to the directory
Open your terminal and navigate to the backend folder of the project:
```bash
cd finance-tracker/backend
```

### 2. Install Dependencies
Install all the necessary npm packages:
```bash
npm install
```

### 3. Environment Variables
Create a file named `.env` in the root of the `backend` directory (if it doesn't already exist). 
Add the following variables to it:

```env
# Server Port (Default is 3000 or 5000)
PORT=3000

# PostgreSQL Database Connection String
DATABASE_URL="postgresql://username:password@localhost:5432/your_db_name"

# JWT Configuration for Authentication
JWT_SECRET="your_super_secret_jwt_key"
JWT_EXPIRY="1d"
```
*(Make sure to replace the `DATABASE_URL` with your actual Neon or local PostgreSQL database connection string).*

### 4. Run the Server

You can start the server in two ways:

**For Development (Auto-restarts on changes):**
```bash
npm run dev
```

**For Production:**
```bash
npm start
```

You should see a message in your console indicating that the server is running and the database has been synced:
```
Server running on port 3000
Database synced
```

---

##  API Documentation (Swagger)

This project uses Swagger for automated, interactive API documentation. 

Once your server is running, you can view the documentation and test all routes (including Admin, Auth, Transactions, and Dashboard) directly in your browser:

 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

*Note: If you changed the `PORT` in your `.env` file to something else, replace `3000` with your port.*

## Project Structure

```
backend/
├── config/           # Database and Swagger configurations
├── controllers/      # Route handlers/logic
├── middleware/       # Express middlewares (Authentication, Authorization)
├── models/           # Sequelize database schemas (User, Transaction)
├── routes/           # Express route definitions
├── utils/            # Helper functions (JWT generation, etc.)
├── app.js            # Express app configuration
├── server.js         # Entry point for the server
└── .env              # Environment variables
```
