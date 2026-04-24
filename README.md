# Personal Finance Tracker

A full-stack Personal Finance Tracker application designed to help users manage their transactions, track income and expenses, and visualize their financial data through an intuitive and modern dashboard. The project features role-based access control, high-performance data rendering, and a fully documented API.

##  Features

- **Authentication & Roles**: Secure JWT-based login and registration. Includes support for `admin`, `user`, and `read-only` roles.
  - *Admin Panel*: Admins can view all users, monitor activities, and delete accounts.
  - *Read-Only Mode*: Users can log in as a read-only user (using their standard credentials), which allows them to view dashboards and transactions but safely disables all CRUD (adding, editing, deleting) operations.
- **Dynamic Dashboard**: Visualizes financial data using charts (Income vs Expense, Spending by Category, Monthly Trends).
- **Transaction Management**: Add, edit, and delete transactions. Categorizes transactions as income or expense.
- **High Performance**: Employs virtualization (`@tanstack/react-virtual`) to render thousands of transactions seamlessly without browser lag.
- **API Documentation**: Automated, interactive Swagger documentation for the backend API.

## Technology Stack

### Frontend
- **Framework**: React 19 (built with Vite)
- **Routing**: React Router v7 (`react-router-dom`)
- **State Management**: React Context API
- **API Client**: Axios (with centralized interceptors)
- **Data Visualization**: Recharts
- **Styling**: Modern Custom CSS, `react-hot-toast` for toast notifications
- **Virtualization**: `@tanstack/react-virtual` & `react-virtualized-auto-sizer`

### Backend
- **Environment**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JSON Web Tokens (JWT) & bcryptjs
- **Documentation**: Swagger UI (`swagger-jsdoc` & `swagger-ui-express`)

---

## Local Development Setup

Follow these instructions to get the application running on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) (Local installation or cloud-hosted DB like Neon, Supabase, etc.)

### 1. Backend Setup

Open a terminal and navigate to the backend directory:
```bash
cd backend
```

**Install dependencies:**
```bash
npm install
```

**Configure Environment Variables:**
Create a `.env` file in the root of the `backend` folder and add the following:
```env
# Server Port
PORT=3000

# PostgreSQL Database Connection String
DATABASE_URL="postgresql://username:password@localhost:5432/finance_tracker"

# JWT Configuration
JWT_SECRET="your_super_secret_jwt_key"
JWT_EXPIRY="1d"
```
*(Make sure to replace `DATABASE_URL` with your actual local PostgreSQL or cloud database connection string).*

**Start the Backend Server:**
```bash
npm run dev
```
You should see a message indicating the server is running and the database has synced. The API documentation is now available at `http://localhost:3000/api-docs`.

### 2. Frontend Setup

Open a **new** terminal window (keep the backend running) and navigate to the frontend directory:
```bash
cd frontend
```

**Install dependencies:**
```bash
npm install
```

**Configure Environment Variables:**
Create a `.env` file in the root of the `frontend` folder:
```env
VITE_API_URL=http://localhost:3000/api
```

**Start the Frontend Server:**
```bash
npm run dev
```
Navigate to `http://localhost:5173` (or the port Vite provides) in your browser to view the application!

---

##  API Documentation

This project uses Swagger for automated, interactive API documentation. 

Once your backend server is running, you can view the documentation and test all routes directly in your browser:

👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**
