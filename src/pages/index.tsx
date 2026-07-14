import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const chapters = [
  {
    title: 'Chapter 1',
    description: 'Build the first digital production flow, products, resources, workplans and orders.',
    to: '/docs/chapter-1-basics',
  },
  {
    title: 'Chapter 2',
    description: 'Add drivers, simulate hardware and extend the production line with automated cells.',
    to: '/docs/chapter-2-drivers',
  },
  {
    title: 'Chapter 3',
    description: 'Route products to the right cell with capabilities and parameter binding.',
    to: '/docs/chapter-3-basics-ii',
  },
];

export default function Home() {
  return (
    <Layout
      title="Application Developer Program"
      description="Hands-on MORYX training delivered with Docusaurus">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.kicker}>MORYX Training</p>
                <Heading as="h1" className={styles.title}>
                  Application Developer Program
                </Heading>
                <p className={styles.subtitle}>
                  Learn the MORYX workflow by building a pencil factory application from scratch.
                </p>
                <div className={styles.actions}>
                  <Link className="button button--primary button--lg" to="/docs/intro">
                    Start with the overview
                  </Link>
                  <Link className="button button--secondary button--lg" to="/docs/chapter-1-basics">
                    Jump into Chapter 1
                  </Link>
                </div>
              </div>
              <div className={styles.panel}>
                <Heading as="h2">What you will cover</Heading>
                <ul className={styles.panelList}>
                  <li>Products, resources, workplans and orders</li>
                  <li>Driver integration and simulation</li>
                  <li>Capabilities and parameter binding</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.chapterSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <p className={styles.eyebrow}>Course Structure</p>
              <Heading as="h2">Follow the training in sequence</Heading>
            </div>
            <div className={styles.chapterGrid}>
              {chapters.map((chapter) => (
                <Link key={chapter.title} className={clsx('card', styles.chapterCard)} to={chapter.to}>
                  <Heading as="h3">{chapter.title}</Heading>
                  <p>{chapter.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
