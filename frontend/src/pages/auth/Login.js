import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    // TODO: integrate API
    setTimeout(() => {
      setSubmitting(false);
      navigate('/dashboard'); // placeholder redirect
    }, 700);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Log in to continue tracking your applications</p>

        {error && <div className="auth-error" role="alert">{error}</div>}

        <form onSubmit={onSubmit} className="auth-form">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            aria-invalid={!!error}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          <div className="auth-row">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <button type="button" className="link" disabled>
              Forgot password?
            </button>
          </div>

          <button className="btn btn-primary btn-large" disabled={submitting}>
            {submitting ? 'Logging in…' : 'Log In'}
          </button>
        </form>

        <div className="auth-footer">
          <span>New here?</span> <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}


