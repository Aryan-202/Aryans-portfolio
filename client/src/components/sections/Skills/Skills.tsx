import { motion } from "motion/react";
import { skills } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Code, Grid, Layers, Cpu, Wrench, Zap } from "lucide-react";

const Skills = () => {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryConfig = {
    languages: {
      title: "Languages",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
    },
    frameworks: {
      title: "Frameworks",
      icon: <Grid className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
    },
    libraries: {
      title: "Libraries",
      icon: <Layers className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
    },
    softwares: {
      title: "Softwares",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
    },
    tools: {
      title: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      color: "from-yellow-500 to-amber-500",
    },
    exploring: {
      title: "Exploring",
      icon: <Zap className="w-5 h-5" />,
      color: "from-gray-500 to-gray-700",
    },
  };

  const categories = Object.keys(skillsByCategory) as Array<
    keyof typeof categoryConfig
  >;

  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital
            experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${categoryConfig[category].color}`}
                  >
                    {categoryConfig[category].icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {categoryConfig[category].title}
                    </h3>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {skillsByCategory[category].map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center p-2 group-hover:bg-background transition-all duration-100">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xs font-medium text-center line-clamp-2 group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;