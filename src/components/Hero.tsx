import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiBugcrowd } from 'react-icons/si';
import { Card } from './Card';
import { Tape } from './Tape';
import { identity, socials } from '../config/site';
import type { ReactElement } from 'react';

const iconMap: Record<string, ReactElement> = {
  email: <FaEnvelope size={18} />,
  github: <FaGithub size={18} />,
  bugcrowd: <SiBugcrowd size={18} />,
};

export const Hero = () => {
  return (
    <header style={{ marginBottom: '3rem', marginTop: '2rem' }}>
      <Card tiltAngle={-1} delay={0.1}>
        <Tape position="corner-tl" />
        <Tape position="corner-tr" />
        
        <div className="hero-flex" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <div style={{ flex: 1 }}>
            <span className="cardboard-label">Profile / ID</span>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{identity.name}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
              {identity.title}
            </p>
          </div>
          <div>
            <img 
              src={identity.avatarUrl} 
              alt={`${identity.name} Profile`} 
              className="profile-pic"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-center gap-md" style={{ marginTop: '2.5rem', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={s.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              className="btn-cardboard"
            >
              {iconMap[s.icon]}
              {s.label}
            </a>
          ))}
        </div>
      </Card>
    </header>
  );
};
