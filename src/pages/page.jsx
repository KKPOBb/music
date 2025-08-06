import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Player from '../components/player';
import Footer from '../components/footer';
import SocialLinksMusic from '../components/SocialLinksMusic';

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <SocialLinksMusic />
      <Player />
      <Footer />
    </div>
  );
};

export default Index;
