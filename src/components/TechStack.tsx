import { Card } from './Card';
import { Tape } from './Tape';
import { techStack } from '../config/site';

export const TechStack = () => {
  return (
    <section>
      <Card tiltAngle={0.5} delay={0.3}>
        <Tape position="top-center" />
        <span className="cardboard-label">Technical Stack</span>
        
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {techStack.map((cat, idx) => (
            <div key={idx}>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-text-main)' }}>{cat.title}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.items.map(item => (
                  <span 
                    key={item} 
                    style={{
                      border: '1px solid var(--color-border)',
                      padding: '0.2rem 0.6rem',
                      fontSize: '0.85rem',
                      backgroundColor: 'rgba(0,0,0,0.03)',
                      boxShadow: '1px 1px 0 rgba(0,0,0,0.1)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
