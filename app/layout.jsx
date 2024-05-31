import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import MotionScroll from './components/MotionScroll';

export const metadata = {
  title: 'AzulaFire Blog',
  description: 'A simple blog about life, code and everything else.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='text-zinc-900 bg-zinc-100 min-h-screen'>
        <Header />
        <MotionScroll />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
