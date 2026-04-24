import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Auth.css';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(formData);
    if (result.success) {
      toast.success('Registration successful!');
      navigate('/');
    } else {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="form-input"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

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



          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Register
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login" className="link">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;