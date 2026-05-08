import { Link, useLocation } from 'react-router-dom';

export const Nav = () => {
  const loc = useLocation();
  const homePaths = new Set(['/', '/explore']);
  const isActive = (path: string) => (path === '/' ? homePaths.has(loc.pathname) : loc.pathname === path);
  const getStyle = (path: string) => ({
    color: isActive(path) ? 'var(--color-text-main)' : 'var(--color-text-muted)',
    borderBottom: isActive(path) ? '2px dashed var(--color-border)' : 'none',
    paddingBottom: '2px',
    fontWeight: isActive(path) ? 'bold' : 'normal',
    textDecoration: 'none'
  });

  return (
    <nav style={{ padding: '1rem', display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2rem' }}>
      <Link to="/" style={getStyle('/')}>[ Home ]</Link>
      <Link to="/vulns" style={getStyle('/vulns')}>[ Vulnerabilities ]</Link>
    </nav>
  );
};
