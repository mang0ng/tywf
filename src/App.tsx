import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Footer } from './components/footer/footer';
import { Routes, Route } from 'react-router-dom';
import { Classes } from './components/classes/classes';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
