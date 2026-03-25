import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiBugcrowd } from 'react-icons/si';
import { Card } from './Card';
import { Tape } from './Tape';

export const Hero = () => {
  return (
    <header style={{ marginBottom: '3rem', marginTop: '2rem' }}>
      <Card tiltAngle={-1} delay={0.1}>
        <Tape position="corner-tl" />
        <Tape position="corner-tr" />
        
        <div className="hero-flex" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ flex: 1 }}>
            <span className="cardboard-label">Profile / ID</span>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Joshua van Rijswijk</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
              Dutch Young Cybersecurity Researcher & Full-Stack Developer.
            </p>
          </div>
          <div>
            <img 
              src="https://github.com/jvr2022.png" 
              alt="Joshua van Rijswijk Profile" 
              className="profile-pic"
            />
          </div>
        </div>

        <div className="flex-center gap-md" style={{ marginTop: '2.5rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          <a href="mailto:joshuavanrijswijk@outlook.com" className="btn-cardboard">
            <FaEnvelope size={18} />
            Email
          </a>
          <a href="https://github.com/Jvr2022" target="_blank" rel="noreferrer" className="btn-cardboard">
            <FaGithub size={18} />
            GitHub
          </a>
          <a href="https://bugcrowd.com/h/Joshuavanrijswijk" target="_blank" rel="noreferrer" className="btn-cardboard">
            <SiBugcrowd size={18} />
            Bugcrowd
          </a>
        </div>
      </Card>
    </header>
  );
};
