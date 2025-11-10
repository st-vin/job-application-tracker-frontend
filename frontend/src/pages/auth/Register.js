import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const update = (key) => (e) => {
    const value = key === 'terms' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!form.terms) {
      setError('Please accept the terms and conditions');
      return;
    }
    setSubmitting(true);
    // TODO: integrate API; show success → prompt email verification
    setTimeout(() => {
      setSubmitting(false);
      navigate('/verify'); // after registration, lead to verify flow
    }, 900);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">Create your account</h2>
        <p className="auth-subtitle">Start tracking your job search today</p>

        {error && <div className="auth-error" role="alert">{error}</div>}

        <form onSubmit={onSubmit} className="auth-form">
          <div className="grid-2">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" value={form.firstName} onChange={update('firstName')} required />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" value={form.lastName} onChange={update('lastName')} required />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={update('email')} required />

          <div className="grid-2">
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" value={form.password} onChange={update('password')} required />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" type="password" value={form.confirmPassword} onChange={update('confirmPassword')} required />
            </div>
          </div>

          <label className="checkbox">
            <input type="checkbox" checked={form.terms} onChange={update('terms')} />
            <span>I agree to the terms and conditions</span>
          </label>

          <button className="btn btn-primary btn-large" disabled={submitting}>
            {submitting ? 'Creating account…' : 'Create Account'}
          </button>
        </form>

        <div className="auth-footer">
          <span>Already have an account?</span> <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}


