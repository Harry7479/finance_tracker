import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'user' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(formData.email, formData.password, formData.role);
    if (result.success) {
      toast.success('Welcome back!');
      navigate('/');
    } else {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="form-input"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="form-input"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <select 
              className="form-select"
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="user">Login as User</option>
              <option value="read-only">Login as Read-Only</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Log In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register" className="link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;