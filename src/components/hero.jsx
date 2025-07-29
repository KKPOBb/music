import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';

const Hero = () => {
  const slides = [
    {
      image: hero1,
      title: "Welcome to My Musical Journey",
      subtitle: "Experience the soul through music"
    },
    {
      image: hero2,
      title: "Studio Sessions",
      subtitle: "Where magic happens"
    },
    {
      image: hero3,
      title: "Live Performances",
      subtitle: "Feel the energy of live music"
    }
  ];

  const scrollToMusic = () => {
    document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,_hsl(var(--background)/0.8),_hsl(var(--background)/0.4),_transparent)]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text text-transparent animate-fade-in">
            Your Artist Name
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[hsl(var(--foreground)/0.9)] mb-6 animate-fade-in-delay">
            Singer • Songwriter • Performer
          </p>
          <button
            onClick={scrollToMusic}
            className="inline-flex items-center px-6 py-3 rounded-full font-medium text-[hsl(var(--primary-foreground))] bg-[var(--gradient-primary)] hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-105"
          >
            Listen Now
          </button>
        </div>
      </div>

      {/* Custom pagination styles */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 2rem !important;
        }
        .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground) / 0.5) !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: hsl(var(--primary)) !important;
          transform: scale(1.3) !important;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-delay {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
