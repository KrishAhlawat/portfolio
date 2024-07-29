import Spline from "@splinetool/react-spline";

export default function AboutSection() {
  return (
    <>
      <div
        className="text-white p-10 text-3xl underline md:text-6xl text-center absolute w-full font-bold bg-transparent z-10"
        id="About"
      >
        who am I?
      </div>
      <div className="w-full m-0 p-0 h-svh relative">
        <div className="h-svh relative">
          <Spline scene="https://prod.spline.design/Ae76Ct5ss8JoipLQ/scene.splinecode" />
        </div>
        <div className="md:mx-40 block md:flex items-center justify-center z-1 absolute top-10 md:top-1/3 bg-transparent">
          <img
            src="/WhatsApp Image 2024-07-23 at 21.02.30_bbf795e0.jpg"
            alt="profile picture"
            className="h-60 md:h-96 mx-auto mt-16 md:mt-0 w-1/2 hover:scale-105 transition-all ease-in-out"
          />
          <p className="text-white my-10 mx-10 md:mx-24 text-sm md:text-xl font-bold bg-transparent">
            Enthusiastic Second-year frontend development is a primary interest
            of this integrated M.Tech student at Vellore Institute of
            Technology, who is also learning MERN Stack capabilities. adept in
            digital design with Figma as well as CSS. Embraces a balanced
            existence, seeking solace in hobbies like cricket and staying
            physically active. A cooperative team player with a talent for
            addressing problems who is motivated by purpose and honesty. Eager
            for chances for meaningful cooperation and information exchange.
          </p>
        </div>
      </div>
    </>
  );
}
