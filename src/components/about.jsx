import { FaMicrophone, FaGuitar, FaHeart, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

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

  // Animatsiya variantlari
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Ichki elementlarni ketma-ket chiqarish
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-[var(--gradient-primary)] bg-clip-text text-transparent">
            Обо мне
          </h2>
          <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Музыка — моя страсть с самого детства. Каждая песня, которую я
            создаю, идёт от сердца, рассказывая истории, которые трогают людей
            на глубоком эмоциональном уровне.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-xl font-bold mb-4"
            variants={itemVariants}
          >
            Мое путешествие
          </motion.h3>
          <motion.div
            className="space-y-4 text-[hsl(var(--muted-foreground))] text-sm md:text-base leading-relaxed"
            variants={containerVariants}
          >
            <motion.p variants={itemVariants}>
              Меня зовут Behzod. Я родился 2 марта 1996 года в древнем и
              солнечном городе Бухара. Музыка вошла в мою жизнь ещё в раннем
              детстве. Уже в возрасте 4 лет я с восторгом слушал Майкла Джексона
              — его энергия, мелодии и подача вдохновляли меня и пробуждали
              любовь к звукам, ритму и искусству.
            </motion.p>
            <motion.p variants={itemVariants}>
              С самого детства мне был интересен спорт — я обожал футбол и
              увлекался кикбоксингом. Но именно музыка всегда оставалась моей
              главной страстью. В 13 лет я уже осознанно посвящал музыке по 10
              часов в день. Я стремился не просто играть — я хотел чувствовать
              каждую ноту, каждую мелодию, проживать её. Этот труд, упорство и
              искреннее увлечение помогли мне вырасти как музыканту.
            </motion.p>
            <motion.p variants={itemVariants}>
              Сегодня за моими плечами более 15 лет музыкального опыта. Я —
              композитор, вокалист и скрипач. Моя основная деятельность сейчас —
              создание собственных авторских песен, в которых я стараюсь
              выразить чувства, переживания и вдохновение, накопленные за годы
              жизни и творчества. Музыка для меня — это способ говорить с миром
              на языке эмоций.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Skills */}
        <div className="mt-16">
          <motion.h3
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
          >
            Что я делаю
          </motion.h3>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group transition-[var(--transition-smooth)]"
                  variants={itemVariants}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-3 bg-[var(--gradient-secondary)] rounded-[var(--radius)] flex items-center justify-center shadow-[var(--shadow-elegant)] group-hover:shadow-[var(--shadow-glow)] transition-[var(--transition-smooth)]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
                  </motion.div>
                  <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;