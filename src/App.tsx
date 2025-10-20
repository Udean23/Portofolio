import Squares from './components/hero/Squares'
import TextType from './components/hero/TextType'
import headerImg from "../src/assets/header-img.svg"; 

function App() {
  return (
    <div className="bg-black">
      <div className="relative min-h-screen overflow-hidden text-white">
        <div className="absolute inset-0 z-10">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            hoverFillColor="rgba(255,255,255,0.05)"
          />
        </div>

        <header className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto relative z-10">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg">Udinn.Cd</span>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Skill</a>
            <a href="#" className="hover:text-gray-300">Certificate</a>
            <a href="#" className="hover:text-gray-300">Project</a>
          </nav>
        </header>

        <main className="flex flex-col md:flex-row items-center justify-center text-center h-[80vh] relative z-10 px-4 gap-10">

          <div className="max-w-150 mx-auto">
            <div className="text-4xl md:text-4xl font-bold leading-tight max-w-120 text-start">
              <TextType
                text={[
                  "Hello World!!",
                  "My name is Udinn I'm a FrontEnd Web Developer",
                  "Welcome to my Portfolio",
                  "Glad to see you here!"
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>

            <div className="mt-6 text-gray-300 max-w-2xl mx-auto">
              <p className="text-start">
                I'm a passionate FrontEnd Web Developer with <br />
                experience in creating dynamic and responsive web applications. <br />
                Explore my portfolio to see my work and skills.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10">
            <img
              src={headerImg}
              alt="Header Img"
              className="w-74 h-74 object-contain floating-img"
            />
          </div>

        </main>
      </div>
    </div>
  )
}

export default App
