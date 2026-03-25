import { Card } from './Card';
import { Tape } from './Tape';

export const HallOfFame = () => {
  const companies = [
    { name: 'LastPass', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/LastPass_logo.svg/1280px-LastPass_logo.svg.png', link: 'https://bugcrowd.com/lastpass' },
    { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Apple_logo_with_text_%28white%29.png', link: 'https://security.apple.com/' },
    { name: 'PolarLearn', src: 'https://i.imgur.com/dChmDfD.png', link: 'https://polarlearn.nl/' },
    { name: 'T-Mobile', src: 'https://static.wikia.nocookie.net/logopedia/images/9/98/T-Mobile_2022.svg/revision/latest/scale-to-width-down/300?cb=20220329141156', link: 'https://bugcrowd.com/engagements/t-mobile' },
  ];

  return (
    <section style={{ marginTop: '3rem' }}>
      <Card tiltAngle={-0.5} delay={0.4}>
        <Tape position="corner-tr" />
        <span className="cardboard-label">Hall of Fame</span>
        <p style={{ marginTop: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
          Acknowledged for security contributions by the following organizations:
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          {companies.map(company => (
            <a 
              key={company.name} 
              href={company.link} 
              target="_blank" 
              rel="noreferrer"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', filter: 'grayscale(60%)', transition: 'filter 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(60%)'}
            >
              <img 
                src={company.src} 
                alt={`${company.name} Security Program`} 
                style={{ maxHeight: '45px', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 'normal' }}>{company.name}</span>
            </a>
          ))}
        </div>
      </Card>
    </section>
  );
};
