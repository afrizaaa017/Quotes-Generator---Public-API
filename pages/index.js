import Head from 'next/head';
import QuoteBox from '@/components/QuoteBox';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Random Quotes Generator</title>
        <meta name="description" content="Generate random quotes with Next.js" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Quotes Generator</h1>
        <QuoteBox />
      </main>
    </div>
  );
}