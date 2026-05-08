import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Vulnerabilities } from './pages/Vulnerabilities';
import { NotFound } from './pages/NotFound';
import { Nav } from './components/Nav';
import { ThemeToggle } from './components/ThemeToggle';
import { BackToTop } from './components/BackToTop';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiBugcrowd } from 'react-icons/si';
import { socials, identity, startYear } from './config/site';
import type { ReactElement } from 'react';

const footerIconMap: Record<string, ReactElement> = {
  email: <FaEnvelope size={22} />,
  github: <FaGithub size={22} />,
  bugcrowd: <SiBugcrowd size={22} />,
};

function App() {
  const currentYear = new Date().getFullYear();
  const yearLabel = startYear < currentYear ? `${startYear} – ${currentYear}` : `${currentYear}`;

  return (
    <BrowserRouter>
      <div className="cardboard-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Home />} />
          <Route path="/vulns" element={<Vulnerabilities />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-highlight)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                {footerIconMap[s.icon]}
              </a>
            ))}
          </div>
          <p style={{ margin: 0 }}>&copy; {yearLabel} {identity.name}.</p>
        </footer>
      </div>

      <ThemeToggle />
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
