import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      // TODO: Replace with actual API call
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Login attempt:', formData);
      // Navigate to dashboard or home page after successful login
      // navigate('/dashboard');
      
      alert('Login successful! (This is a demo)');
      setFormData({ email: '', password: '' });
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container login-variant">
      <div className="auth-card login-card">
        <div className="auth-header login-header">
          <h1>Sign In</h1>
          <p>Access your TotalSecurity dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form login-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              autoComplete="username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="form-options login-options">
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="auth-button login-button"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="auth-footer login-footer">
          <p>New to TotalSecurity? <Link to="/signup">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
