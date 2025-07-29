import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
import About from '../components/About';
import SocialLinks from '../components/SocialLinks';
import Player from '../components/Player';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* <Hero /> */}
      <About />
      <SocialLinks className="py-20 bg-gradient-background" />
      <Player />
      <Footer />
    </div>
  );
};

export default Index;
