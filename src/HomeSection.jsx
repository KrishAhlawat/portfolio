import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";

export default function HomeSection() {
  return (
    <>
      <Navbar />
      <div className="w-full m-0 p-0 h-svh" id="Home">
        {/* DESKTOP VIEW */}
        <div className="hidden md:block w-full h-full">
          <Spline scene="https://prod.spline.design/CMyAZ46WpD4nJCfP/scene.splinecode" />
        </div>
        {/* MOBILE VIEW */}
        <div className="md:hidden w-full h-full">
          <Spline scene="https://prod.spline.design/WVhThFjk7BaJM9DL/scene.splinecode" />
        </div>
      </div>
    </>
  );
}
