import TextType from './components/hero/TextType'
import LightRays from './components/hero/LightRays';
import { Globe } from 'react-feather';
import PersonalCard from './components/about/personalCard';
import SkillsSection from './components/about/SkillSection';
import Tools from './components/about/Tools';
import Project from './components/about/Project';
import Sertificate from './components/about/Sertificate';
import DomeGallery from './components/about/DomeGallery';

function App() {
  return (
    <div className="bg-black">
      <div className="relative min-h-screen overflow-hidden text-white">
        <div className="absolute inset-0 z-10">
          <LightRays
            raysOrigin="top-center"
            raysColor="white"
            raysSpeed={2.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        <header className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto relative z-10">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg">Udinn.Cd</span>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Experience</a>
          </nav>
        </header>

        <main className="flex flex-col justify-center items-center text-center h-[80vh] relative z-10 px-4 gap-10">

          <div className="flex gap-2 font-bold justify-center border pl-4 pr-4 pt-1 pb-1 border-transparent bg-gray-600 rounded-4xl">
            <Globe /><p>East Java, Indonesia</p>
          </div>

          <div className="mx-auto">
            <div className="text-6xl font-bold leading-tight text-center mx-auto">
              <TextType
                text={[
                  "Hello World!!",
                  "My name is Udinn ",
                  "I'm a FrontEnd Web Developer",
                  "Welcome to my Portfolio",
                  "Glad to see you here!"
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>

            <div className="mt-6 text-gray-300 max-w-4xl mx-auto">
              <p className="text-center text-lg">
                I'm a passionate FrontEnd Web Developer with <br />
                experience in creating dynamic and responsive web applications. <br />
                Explore my portfolio to see my work and skills.
              </p>
            </div>
          </div>

        </main>
      </div>

      <div className="min-h-screen w-full flex items-center gap-25 justify-center px-4 text-white">
        <div className="">
          <PersonalCard />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <SkillsSection />
        <Tools />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Project />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <DomeGallery />
      </div>
    </div>
  )
}

export default App
