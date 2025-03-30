import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'SarojVidyalaya | Playful Learning in Nature\'s Embrace',
  description: 'Discover our playful approach to education that nurtures curiosity and makes even the most challenging subjects engaging for young minds.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}