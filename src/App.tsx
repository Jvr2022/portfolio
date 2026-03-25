import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Vulnerabilities } from './pages/Vulnerabilities';
import { Nav } from './components/Nav';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiBugcrowd } from 'react-icons/si';

function App() {
  return (
    <BrowserRouter>
      <div className="cardboard-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vulns" element={<Vulnerabilities />} />
        </Routes>
        
        <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="mailto:joshuavanrijswijk@outlook.com" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='var(--color-text-highlight)'} onMouseLeave={e => e.currentTarget.style.color='var(--color-text-muted)'}><FaEnvelope size={22} /></a>
            <a href="https://github.com/Jvr2022" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='var(--color-text-highlight)'} onMouseLeave={e => e.currentTarget.style.color='var(--color-text-muted)'}><FaGithub size={22} /></a>
            <a href="https://bugcrowd.com/h/Joshuavanrijswijk" target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='var(--color-text-highlight)'} onMouseLeave={e => e.currentTarget.style.color='var(--color-text-muted)'}><SiBugcrowd size={22} /></a>
          </div>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Joshua van Rijswijk.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
