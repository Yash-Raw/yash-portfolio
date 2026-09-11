import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Calibration } from './components/Calibration';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Calibration />
        <Contact />
      </main>
      <footer className="footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Yash Chaurasia</span>
        </div>
      </footer>
    </>
  );
}
