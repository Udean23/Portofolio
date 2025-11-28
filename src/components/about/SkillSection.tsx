import { Code2, Network, Palette, Wrench } from "lucide-react";
import { Database, Settings, Users } from "react-feather";
import SpotlightCard from "./SpotLightCard";
import { BiSupport } from "react-icons/bi";
import { DiReact } from "react-icons/di";

const SkillsSection = () => {
  const skills = [
    {
      name: 'Ui/UX',
      icon: <Palette className="w-12 h-12" strokeWidth={1.5} />,
      color: 'rgba(242, 78, 30, 0.3)',
      iconColor: 'text-orange-500'
    },
    {
      name: 'Frontend Development',
      icon: <Code2 className="w-12 h-12" strokeWidth={1.5} />,
      color: 'rgba(37, 150, 255, 0.3)',
      iconColor: 'text-blue-400'
    },
    {
      name: 'Database Management',
      icon: <Database className="w-12 h-12" strokeWidth={1.5} />,
      color: 'rgba(255, 165, 0, 0.3)',
      iconColor: 'text-orange-400'
    },
    {
      name: 'Backend Development',
      icon: <Settings className="w-12 h-12" strokeWidth={1.5} />,
      color: 'rgba(150, 150, 150, 0.3)',
      iconColor: 'text-gray-400'
    },
    {
      name: 'Server Management',
      icon: <Network className="w-12 h-12" strokeWidth={1.5} />,
      color: 'rgba(0, 255, 180, 0.3)',
      iconColor: 'text-emerald-400'
    },
    {
      name: 'Team Work',
      icon: <Users className="w-12 h-12" strokeWidth={1.5} />,
      color: 'rgba(66, 153, 225, 0.3)',
      iconColor: 'text-blue-400'
    },
    {
      name: 'IT Support',
      icon: <BiSupport className="w-12 h-12" strokeWidth={1.5} />,
      color: 'rgba(236, 72, 153, 0.3)',
      iconColor: 'text-pink-500'
    },
    {
      name: 'Troubleshooting',
      icon: <Wrench className="w-12 h-12" strokeWidth={1.5} />,
      color: 'rgba(168, 85, 247, 0.3)',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <div className="w-full bg-black flex flex-col justify-center px-4 py-16 text-white">
      <div className="mb-12 flex justify-between gap-4">
        <div className="relative">
          <h1 className="text-5xl font-bold">Skills</h1>
          <div className="absolute -bottom-2 left-0 w-20 h-1 bg-white"></div>
          <div className="absolute -bottom-4 left-0 w-15 h-1 bg-white"></div>
        </div>
        <DiReact size={50} color="cyan"/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {skills.map((skill, index) => (
          <SpotlightCard
            key={index}
            className="transition-transform duration-300 hover:scale-105 cursor-pointer"
            spotlightColor={skill.color}
          >
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
              <div className={skill.iconColor}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;