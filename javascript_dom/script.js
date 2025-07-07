const quoteTextEl = document.getElementById('quote-text');
const quoteAuthorEl = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');
const API_URL = 'https://dummyjson.com/quotes/random';

async function fetchAndRenderQuote() {
  try {
    quoteTextEl.textContent = 'Memuat kutipan...';
    quoteAuthorEl.textContent = '';
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Gagal memuat data');
    const { quote, author } = await res.json();
    quoteTextEl.textContent = `"${quote}"`;
    quoteAuthorEl.textContent = `— ${author}`;
  } catch (err) {
    quoteTextEl.textContent = 'Terjadi kesalahan.';
    console.error(err);
  }
}

newQuoteBtn.addEventListener('click', fetchAndRenderQuote);
window.addEventListener('DOMContentLoaded', fetchAndRenderQuote);
