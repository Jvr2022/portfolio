import { Hero } from '../components/Hero';
import { CveShortcut } from '../components/CveShortcut';
import { About } from '../components/About';
import { TechStack } from '../components/TechStack';
import { HallOfFame } from '../components/HallOfFame';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Joshua van Rijswijk - Security Researcher</title>
        <meta name="description" content="Welcome to the portfolio of Joshua van Rijswijk (Jvr2022). Explore my cybersecurity research, tech stack, and professional exploit development experience." />
      </Helmet>
      <Hero />
      <CveShortcut />
      <hr style={{ border: 'none', borderTop: '2px dashed var(--color-border)', margin: '3rem 0' }} />
      <About />
      <hr style={{ border: 'none', borderTop: '2px dashed var(--color-border)', margin: '3rem 0' }} />
      <div className="grid-2">
        <TechStack />
        <HallOfFame />
      </div>
    </>
  );
};
