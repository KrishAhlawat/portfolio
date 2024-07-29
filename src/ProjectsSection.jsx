import Spline from "@splinetool/react-spline";

export default function ProjectsSection() {
  return (
    <>
      <div className="relative" id="Projects">
        <div className="text-white p-10 text-3xl mt-10 underline md:text-6xl text-center w-full font-bold bg-transparent z-10">
          Projects I've worked on
        </div>
        <div className="w-full m-0 p-0 h-svh relative">
          <div className="h-svh">
            <Spline scene="https://prod.spline.design/TRQ5rvC2QmilAbqF/scene.splinecode" />
          </div>
          <div className="flex flex-wrap justify-center absolute top-20 bg-transparent w-full">
            <div className="border-2 border-white rounded-lg mx-10 mb-10 md:w-auto">
              <div className="w-auto md:w-80 p-4 rounded-lg cursor-pointer">
                <img
                  src="/EcoHarmony-homepage.png"
                  alt="EcoHarmony Homepage"
                  className="rounded-lg"
                />
              </div>
              <div className="p-4 max-w-80 rounded-lg">
                <div className="flex justify-between pb-2">
                  <div className="text-white font-bold">EcoHarmony</div>
                  <div className="text-white cursor-pointer transition ease-in-out 1s hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-100">
                    <a
                      href="https://github.com/KrishAhlawat/EcoHarmony"
                      target="_blank"
                    >
                      <img
                        src="\src\assets\github.png"
                        alt="github logo"
                        className="text-white bg-transparent"
                      />
                    </a>
                  </div>
                </div>
                <div className="text-white w-auto rounded-lg">
                  At EcoHarmony, we strive to create a world where environmental
                  sustainability and community well-being go hand in hand.
                </div>
              </div>
            </div>
            <div className="border-2 border-white rounded-lg mx-10 mb-10 md:w-auto">
              <div className="w-auto md:w-80 p-4 rounded-lg cursor-pointer">
                <img
                  src="/SimonSaysGame-homepage.png"
                  alt="Simon says game Homepage"
                  className="rounded-lg"
                />
              </div>
              <div className="p-4 max-w-80 rounded-lg">
                <div className="flex justify-between pb-2">
                  <div className="text-white font-bold">Simon Says Game</div>
                  <div className="text-white cursor-pointer transition ease-in-out 1s hover:-translate-y-1 hover:scale-110 hover:bg-white-500 duration-100">
                    <a href="https://github.com/KrishAhlawat/Simon-Says-Game" target="_blank">
                      <img
                        src="\src\assets\github.png"
                        alt="github logo"
                        className="text-white bg-transparent"
                      />
                    </a>
                  </div>
                </div>
                <div className="text-white w-auto rounded-lg">
                  The Objective of this game is to remember the pattern and get
                  the highest score.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
