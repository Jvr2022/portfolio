import { Card } from './Card';
import { Tape } from './Tape';

export const About = () => {
  return (
    <section>
      <Card tiltAngle={0.5} delay={0.2}>
        <Tape position="top-center" />
        <span className="cardboard-label">About Me</span>
        <p>
          I am a security researcher and full-stack developer from the Netherlands. I specialize in Web, Android, and Open Source (OSS) hacking. 
        </p>
        <p>
          My background in development allows me to analyze complex codebases and find logic flaws that automated tools miss. I focus on white-box auditing, secure code implementation, and responsible disclosure to help secure the software supply chain.
        </p>
      </Card>
    </section>
  );
};
