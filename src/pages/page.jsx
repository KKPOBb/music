import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import SocialLinks from '../components/SocialLinks';
import Player from '../components/player';
import Footer from '../components/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <SocialLinks className="py-20 bg-gradient-background" />
      <Player />
      <Footer />
    </div>
  );
};

export default Index;
