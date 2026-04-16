import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Tape } from '../components/Tape';
import { Helmet } from 'react-helmet-async';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <section style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Card tiltAngle={-1} delay={0.1}>
          <Tape position="corner-tl" />
          <Tape position="corner-tr" />
          <span className="cardboard-label">Error / 404</span>
          <h1 style={{ fontSize: '5rem', margin: '1rem 0 0.5rem' }}>404</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', margin: '0 0 0.5rem' }}>
            This page slipped between the cardboard flaps.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-cardboard" style={{ display: 'inline-flex' }}>
            ← Back to Home
          </Link>
        </Card>
      </section>
    </>
  );
};
