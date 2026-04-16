import { Card } from './Card';
import { Tape } from './Tape';
import { about } from '../config/site';

export const About = () => {
  return (
    <section>
      <Card tiltAngle={0.5} delay={0.2}>
        <Tape position="top-center" />
        <span className="cardboard-label">About Me</span>
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </Card>
    </section>
  );
};
