import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>10 Things That Require Zero Talent

<ul>
 <il>1. Being On Time</il>
 <il>2. Making An Effort</il>
 <il>3. Being High Energy</il>
 <il>4. Having A Positive Attitude</il>
 <il>5. Being Passionate</il>
 <il>6. Using Good Body Language</il>
 <il>7. Being Coachable</il>
 <il>8. Doing A Little Extra</il>
 <il>9. Being Prepared</il>
 <il>10. Having A Strong Work Ethic</il>
    </ul>
    </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
