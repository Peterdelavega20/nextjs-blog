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
        <p>I'm Peter Don H. Dela Vega, and it's a pleasure to meet you. With a passion for both business and leisure, I've managed to strike a harmonious balance between work and play. When I'm not busy running my own business, you'll likely find me shooting hoops on the basketball court, belting out tunes with my singing voice, or immersed in the virtual world of computer games. Adobo holds a special place in my heart and palate; its savory blend of flavors never fails to satisfy my taste buds. But my love for learning is just as strong as my love for food. I pride myself on being a quick and eager learner, always seeking new opportunities to expand my knowledge and skills.So, whether I'm making strategic business decisions, sinking three-pointers, hitting high notes, or embarking on new learning adventures, I'm dedicated to making the most out of every moment. Feel free to join me on this journey of growth, fun, and exploration!
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}