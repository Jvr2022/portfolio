import { Hero } from '../components/Hero';
import { CveShortcut } from '../components/CveShortcut';
import { About } from '../components/About';
import { TechStack } from '../components/TechStack';
import { HallOfFame } from '../components/HallOfFame';
import { Helmet } from 'react-helmet-async';
import { meta } from '../config/site';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>{meta.homeTitle}</title>
        <meta name="description" content={meta.homeDescription} />
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
