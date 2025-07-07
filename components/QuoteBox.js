import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';

export default function QuoteBox() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://dummyjson.com/quotes/random');
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      setQuote({ quote: 'Gagal memuat kutipan', author: '' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={styles.quoteBox}>
      <p className={styles.quoteText}>
        {loading ? 'Memuat...' : `"${quote?.quote || ''}"`}
      </p>
      <p className={styles.quoteAuthor}>{quote?.author && `— ${quote.author}`}</p>
      <button className={styles.button} onClick={fetchQuote} disabled={loading}>
        {loading ? 'Mengambil...' : 'Generate Quote Baru'}
      </button>
    </div>
  );
}