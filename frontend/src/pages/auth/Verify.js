import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './auth.css';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function Verify() {
  const query = useQuery();
  const navigate = useNavigate();
  const [status, setStatus] = useState('checking'); // checking | success | error
  const token = query.get('token');

  useEffect(() => {
    // TODO: call backend verify API with token
    const timer = setTimeout(() => {
      if (token) {
        setStatus('success');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setStatus('error');
      }
    }, 700);
    return () => clearTimeout(timer);
  }, [token, navigate]);

  return (
    <div className="auth-page">
      <div className="auth-card">
        {status === 'checking' && (
          <>
            <h2 className="auth-title">Verifying your email…</h2>
            <p className="auth-subtitle">Hold tight while we confirm your account.</p>
          </>
        )}
        {status === 'success' && (
          <>
            <h2 className="auth-title">Email verified!</h2>
            <p className="auth-subtitle">Redirecting to login…</p>
            <Link className="btn btn-primary btn-large" to="/login">Go to Login</Link>
          </>
        )}
        {status === 'error' && (
          <>
            <h2 className="auth-title">Invalid or expired link</h2>
            <p className="auth-subtitle">Please request a new verification email.</p>
            <div className="cta-group" style={{ justifyContent: 'center' }}>
              <button className="btn btn-secondary" disabled>Resend verification</button>
              <Link className="btn btn-primary" to="/login">Back to Login</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


