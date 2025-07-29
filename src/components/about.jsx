import { FaMicrophone, FaGuitar, FaHeart, FaAward } from "react-icons/fa";

const About = () => {
  const skills = [
    {
      icon: FaMicrophone,
      title: "Vocals",
      description: "Powerful voice with emotional depth and range",
    },
    {
      icon: FaGuitar,
      title: "Songwriting",
      description: "Creating original lyrics and melodies that resonate",
    },
    {
      icon: FaHeart,
      title: "Performance",
      description: "Captivating live shows with authentic energy",
    },
    {
      icon: FaAward,
      title: "Production",
      description: "Collaborating in studio production and arrangement",
    },
  ];

  const achievements = [
    "Released 3 studio albums",
    "Performed at 50+ venues worldwide",
    "Collaborated with renowned artists",
    "Featured on major streaming platforms",
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Music has been my passion since childhood. Every song I create comes from the heart, 
            telling stories that connect with people on a deep, emotional level.
          </p>
        </div>

        {/* Story & Achievements */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
          {/* Story */}
          <div>
            <h3 className="text-xl font-bold mb-4">My Journey</h3>
            <div className="space-y-4 text-[hsl(var(--muted-foreground))] text-sm md:text-base leading-relaxed">
              <p>
                My musical journey began at the age of 8 when I first picked up a guitar.
                What started as childhood curiosity quickly blossomed into a lifelong passion
                that would define my purpose.
              </p>
              <p>
                Through years of dedication, practice, and countless performances, I've
                developed a unique sound that blends soulful melodies with heartfelt lyrics.
                My music draws inspiration from life experiences, relationships, and the
                beautiful complexity of human emotions.
              </p>
              <p>
                Today, I continue to push creative boundaries, collaborating with talented
                musicians and producers to create music that not only entertains but also
                heals and inspires.
              </p>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-[hsl(var(--card))] rounded-[var(--radius)] p-6 shadow-[var(--shadow-card)] border border-[hsl(var(--border))]">
            <h3 className="text-xl font-bold mb-4">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[var(--gradient-primary)] rounded-full" />
                  <span className="text-sm text-[hsl(var(--muted-foreground))]">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">What I Do</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="text-center group transition-[var(--transition-smooth)]"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-[var(--gradient-secondary)] rounded-[var(--radius)] flex items-center justify-center shadow-[var(--shadow-elegant)] group-hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-[var(--transition-smooth)]">
                    <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
