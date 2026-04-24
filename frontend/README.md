# Personal Finance Tracker - Frontend

This is the React frontend for the Personal Finance Tracker application. It provides a modern, responsive, and highly interactive user interface for managing transactions, viewing financial analytics, and handling user accounts.

##  Technologies Used

- **Framework**: React 19 (built with Vite)
- **Routing**: React Router v7 (`react-router-dom`)
- **State Management**: React Context API
- **API Requests**: Axios (with centralized interceptors)
- **Data Visualization**: Recharts (for Dashboard analytics)
- **Virtualization**: `@tanstack/react-virtual` & `react-virtualized-auto-sizer` (for rendering massive transaction lists without lag)
- **Notifications**: `react-hot-toast` (for sleek, modern toast alerts)
- **Date Formatting**: `date-fns`

## Project Structure

```
frontend/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components (Navbar, Loader, VirtualTransactionList)
│   ├── context/          # React Contexts (AuthContext, ThemeContext)
│   ├── pages/            # Main application views (Dashboard, Login, Transactions, AdminPanel)
│   ├── services/         # API configuration (Axios instances)
│   ├── styles/           # CSS files for custom styling
│   ├── App.jsx           # Main application routing and wrappers
│   └── main.jsx          # React entry point
├── .env.example          # Example environment variables
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite bundler configuration
```

##  Local Setup Instructions

1. **Navigate to the frontend directory**:
   ```bash
   cd finance-tracker/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root of the `frontend` folder (if it doesn't exist) and add your backend API URL. By default, the application will fallback to `http://localhost:3000/api` if this is not provided.
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port Vite provides) to view the application.

##  Features & Permissions

- **Authentication**: JWT-based login and registration.
- **Admin Panel**: Only accessible by users with the `admin` role. Admins can view all users, change roles, or delete accounts.
- **Read-Only Mode**: Users assigned the `read-only` role can view dashboards and transactions but are visually and functionally restricted from adding, editing, or deleting transactions.
- **Virtualized Lists**: The transaction list can handle thousands of rows simultaneously without slowing down the browser.

##  Building for Production

To create a production-ready build of the frontend, run:

```bash
npm run build
```

This will generate a `dist/` directory containing the optimized static files that can be deployed to services like Vercel, Netlify, or an Nginx server.
