import { FaMicrophone, FaGuitar, FaHeart, FaAward } from "react-icons/fa";

const About = () => {
  const skills = [
  {
    icon: FaMicrophone,
    title: "Вокал",
    description: "Мощный голос с эмоциональной глубиной и диапазоном",
  },
  {
    icon: FaGuitar,
    title: "Автор песен",
    description: "Создание оригинальных текстов и мелодий, которые находят отклик",
  },
  {
    icon: FaHeart,
    title: "Выступления",
    description: "Захватывающие живые выступления с подлинной энергетикой",
  },
  {
    icon: FaAward,
    title: "Производство",
    description: "Сотрудничество в студийной работе и аранжировке",
  },
];


  // const achievements = [
  //   "Released 3 studio albums",
  //   "Performed at 50+ venues worldwide",
  //   "Collaborated with renowned artists",
  //   "Featured on major streaming platforms",
  // ];

  return (
    <section
      id="about"
      className="py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text">
            Обо мне
          </h2>
          <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Музыка — моя страсть с самого детства. Каждая песня, которую я
            создаю, идёт от сердца, рассказывая истории, которые трогают людей
            на глубоком эмоциональном уровне.
          </p>
        </div>

        {/* Story & Achievements */}
        {/* <div className="grid lg:grid-cols-2 gap-8 items-start mb-16"> */}
        {/* Story */}
        <div>
          <h3 className="text-xl font-bold mb-4">Мое путешествие</h3>
          <div className="space-y-4 text-[hsl(var(--muted-foreground))] text-sm md:text-base leading-relaxed">
            <p>
              Меня зовут Behzod. Я родился 2 марта 1996 года в древнем и
              солнечном городе Бухара. Музыка вошла в мою жизнь ещё в раннем
              детстве. Уже в возрасте 4 лет я с восторгом слушал Майкла Джексона
              — его энергия, мелодии и подача вдохновляли меня и пробуждали
              любовь к звукам, ритму и искусству.
            </p>
            <p>
              С самого детства мне был интересен спорт — я обожал футбол и
              увлекался кикбоксингом. Но именно музыка всегда оставалась моей
              главной страстью. В 13 лет я уже осознанно посвящал музыке по 10
              часов в день. Я стремился не просто играть — я хотел чувствовать
              каждую ноту, каждую мелодию, проживать её. Этот труд, упорство и
              искреннее увлечение помогли мне вырасти как музыканту.
            </p>
            <p>
              Сегодня за моими плечами более 15 лет музыкального опыта. Я —
              композитор, вокалист и скрипач. Моя основная деятельность сейчас —
              создание собственных авторских песен, в которых я стараюсь
              выразить чувства, переживания и вдохновение, накопленные за годы
              жизни и творчества. Музыка для меня — это способ говорить с миром
              на языке эмоций.
            </p>
          </div>
        </div>

        {/* Achievements */}
        {/* <div className="bg-[hsl(var(--card))] rounded-[var(--radius)] p-6 shadow-[var(--shadow-card)] border border-[hsl(var(--border))]">
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
        </div> */}

        {/* Skills */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">Что я делаю</h3>
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
