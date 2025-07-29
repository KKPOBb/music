import { FaInstagram, FaYoutube, FaTelegram, FaSpotify, FaHeart } from 'react-icons/fa';

const SocialLinks = ({ showTitle = true, className = "" }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: '#',
      color: 'hover:text-pink-500',
      bgGradient: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500'
    },
    {
      name: 'YouTube',
      icon: FaYoutube,
      url: '#',
      color: 'hover:text-red-500',
      bgGradient: 'hover:bg-gradient-to-br hover:from-red-600 hover:to-red-500'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      url: '#',
      color: 'hover:text-blue-500',
      bgGradient: 'hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-400'
    },
    {
      name: 'Spotify',
      icon: FaSpotify,
      url: '#',
      color: 'hover:text-green-500',
      bgGradient: 'hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400'
    }
  ];

  return (
    <div className={`text-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))] ${className}`}>
      {showTitle && (
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow my musical journey and stay updated with the latest releases, behind-the-scenes content, and live performances.
          </p>
        </div>
      )}
      
      <div className="flex justify-center items-center space-x-6 mt-15">
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-4 rounded-full bg-card border border-border transition-all duration-300 hover:border-primary hover:shadow-glow hover:-translate-y-2 ${social.color}`}
              aria-label={social.name}
            >
              <IconComponent className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-lg text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                {social.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
              </div>
            </a>
          );
        })}
      </div>
      
      {showTitle && (
        <div className="mt-8 flex items-center justify-center space-x-2 text-muted-foreground">
          <span>Made with</span>
          <FaHeart className="text-red-500 animate-pulse" />
          <span>for music lovers</span>
        </div>
      )}
    </div>
  );
};

export default SocialLinks;