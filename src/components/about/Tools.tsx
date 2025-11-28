import { DiFirebase, DiLaravel, DiMongodb, DiMysql, DiReact } from "react-icons/di";
import Carousel from "./Carousel";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Code2, Database, Pen } from "lucide-react";
import { Figma } from "react-feather";
import { FaPallet } from "react-icons/fa";

const Tools = () => {

    const FrontEndItem = [
      { title: 'React', description: 'Reusable components.', id: 3, icon: <DiReact size={20} />, color: 'rgba(0,200,255,1)' },
      { title: 'TypeScript', description: 'UI components.', id: 5, icon: <SiTypescript size={20} />, color: 'rgba(0,122,255,1)' },
      { title: 'Tailwind CSS', description: 'UI components.', id: 6, icon: <RiTailwindCssFill size={20} />, color: 'rgba(0,255,200,1)' }
    ];
    
    const FrontEnd = {
      title: 'Frontend Tools',
      description: '',
      id: 0,
      icon: < Pen size={40}/>,
      color: 'rgba(0,200,255,1)'
    };

    const BackEndItem = [
      { title: 'Laravel', description: 'Cool text animations.', id: 1, icon: <DiLaravel size={20} />, color: 'rgba(255,0,0,1)' },
      { title: 'Firebase', description: 'Smooth animations.', id: 2, icon: <DiFirebase size={20} />, color: 'rgba(255,165,0,1)' }
    ];

    const BackEnd = {
      title: 'Backend Tools',
      description: '',
        id: 0,
        icon: < Code2 size={40}/>,
        color: 'rgba(255,165,0,1)'
    };

    const UiUxItem = [
      { title: 'Figma', description: 'Cool text animations.', id: 1, icon: <Figma size={20} />, color: 'rgba(255,0,0,1)' },
      { title: 'Adobe XD', description: 'Smooth animations.', id: 2, icon: <FaPallet size={20} />, color: 'rgba(255,165,0,1)' }
    ];

    const UiUx = {
      title: 'UI/UX Tools',
      description: '',
        id: 0,
        icon: < Pen size={40}/>,
        color: 'rgba(255,0,0,1)'
    };

    const DatabaseItem = [
      { title: 'MySQL', description: 'Cool text animations.', id: 1, icon: < DiMysql size={20} />, color: 'rgba(255,0,0,1)' },
      { title: 'MongoDB', description: 'Smooth animations.', id: 2, icon: <DiMongodb size={20} />, color: 'rgba(255,165,0,1)' }
    ];  

    const DatabaseHero = {
      title: 'Database Tools',
      description: '',
        id: 0,
        icon: < Database size={40}/>,
        color: 'rgba(0,255,200,1)'
    };

    return (
        <div className="min-h-screen w-full bg-black flex flex-col justify-center px-4 py-16 text-white">
            <div className="mb-12 flex justify-between gap-4">
                <div className="relative">
                    <h1 className="text-5xl font-bold">Tools </h1>
                    <div className="absolute -bottom-2 left-0 w-20 h-1 bg-white"></div>
                    <div className="absolute -bottom-4 left-0 w-15 h-1 bg-white"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 max-w-5xl w-full mx-auto">
                <Carousel 
                items={FrontEndItem}
                heroSlide={FrontEnd}/>
                <Carousel 
                items={DatabaseItem}
                heroSlide={DatabaseHero}/>
                <Carousel 
                items={BackEndItem}
                heroSlide={BackEnd}/>
                <Carousel 
                items={UiUxItem}
                heroSlide={UiUx}/>
            </div>
        </div>
    );
};

export default Tools;