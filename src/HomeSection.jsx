import Spline from "@splinetool/react-spline";
import Navbar from "./Navbar";

export default function HomeSection() {
  return (
    <>
      <Navbar />
      <div className="w-full m-0 p-0 h-svh" id="Home">
        <Spline scene="https://prod.spline.design/CMyAZ46WpD4nJCfP/scene.splinecode" />
      </div>
    </>
  );
}
