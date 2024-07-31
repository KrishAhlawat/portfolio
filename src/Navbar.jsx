import MenuOption from "./MenuOption";
import NavOption from "./NavOption";

export default function Navbar() {
  let handleChange = () => {
    let dialog = document.getElementById("nav-dialog");
    dialog.classList.toggle("hidden");
  };

  let downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1Lx8xEnn-S2-SoXZK1GvesFKWq6Pw22tE/view?usp=sharing"
    );
  };

  let openHome = () => {
    window.scrollTo({
      top: document.getElementById("Home").offsetTop,
      behavior: "smooth",
    });
  };
  let openAbout = () => {
    window.scrollTo({
      top: document.getElementById("About").offsetTop,
      behavior: "smooth",
    });
  };
  let openSkills = () => {
    window.scrollTo({
      top: document.getElementById("Skills").offsetTop,
      behavior: "smooth",
    });
  };
  let openProjects = () => {
    window.scrollTo({
      top: document.getElementById("Projects").offsetTop,
      behavior: "smooth",
    });
  };
  let openContactSection = () => {
    window.scrollTo({
      top: document.getElementById("Contact").offsetTop,
      behavior: "smooth",
    });
  };

  let openHomeFromNav = () => {
    let section = document.getElementById("Home");
    section.scrollIntoView({ behavior: "smooth" });
    let dialog = document.getElementById("nav-dialog");
    dialog.classList.add("hidden");
  };
  let openAboutFromNav = () => {
    let section = document.getElementById("About");
    section.scrollIntoView({ behavior: "smooth" });
    let dialog = document.getElementById("nav-dialog");
    dialog.classList.add("hidden");
  };
  let openSkillsFromNav = () => {
    let section = document.getElementById("Skills");
    section.scrollIntoView({ behavior: "smooth" });
    let dialog = document.getElementById("nav-dialog");
    dialog.classList.add("hidden");
  };
  let openProjectsFromNav = () => {
    let section = document.getElementById("Projects");
    section.scrollIntoView({ behavior: "smooth" });
    let dialog = document.getElementById("nav-dialog");
    dialog.classList.add("hidden");
  };
  let openContactFromNav = () => {
    let section = document.getElementById("Contact");
    section.scrollIntoView({ behavior: "smooth" });
    let dialog = document.getElementById("nav-dialog");
    dialog.classList.add("hidden");
  };

  return (
    <>
      {/* <nav>
        <div>
          <div>Krish Ahlawat</div>
          <div>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#ContactUs">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav> */}
      <nav className="w-full sm:w-screen h-auto bg-transparent flex justify-between px-4 md:justify-between md:py-5 navbar md:px-12 fixed Navbar z-50">
        <div
          className="font-bold text-3xl text-white bg-transparent place-content-center cursor-pointer"
          onClick={openHome}
        >
          KRISH
        </div>
        <div
          className="my-5 lg:hidden cursor-pointer bg-transparent"
          onClick={handleChange}
        >
          <span className="material-symbols-outlined bg-transparent text-white">
            menu
          </span>
        </div>
        <div className="hidden lg:flex align-middle items-center bg-transparent place-content-center">
          <ul className="flex bg-transparent">
            <div className="bg-transparent" onClick={openAbout}>
              <NavOption NavOption={"About me"} />
            </div>
            <div className="bg-transparent" onClick={openSkills}>
              <NavOption NavOption={"Skills"} />
            </div>
            <div className="bg-transparent" onClick={openProjects}>
              <NavOption NavOption={"Projects"} />
            </div>
            <div className="bg-transparent" onClick={downloadResume}>
              <NavOption NavOption={"Resume"} />
            </div>
          </ul>
        </div>
        <div className="hidden lg:flex align-middle bg-transparent">
          <button
            type="button"
            onClick={openContactSection}
            class="text-green-700 hover:text-white border border-blue-700 bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-10 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Get in Touch
          </button>
        </div>
        <div
          id="nav-dialog"
          className={"sm:w-screen fixed z-10 lg:hidden hidden md:p-4 inset-0"}
        >
          <div className="flex justify-between px-4">
            <div
              className="font-bold text-3xl text-white place-content-center cursor-pointer"
              onClick={openHome}
            >
              KRISH
            </div>
            <div
              className="my-5 lg:hidden cursor-pointer"
              onClick={handleChange}
            >
              <span className="material-symbols-outlined text-white items-center">
                close
              </span>
            </div>
          </div>
          <div>
            <div className="bg-transparent" onClick={openHomeFromNav}>
              <MenuOption MenuOption={"Home"} menuTarget={"#Home"} />
            </div>
            <div className="bg-transparent" onClick={openAboutFromNav}>
              <MenuOption MenuOption={"Who am I?"} menuTarget={"#About"} />
            </div>
            <div className="bg-transparent" onClick={openSkillsFromNav}>
              <MenuOption MenuOption={"Skills"} menuTarget={"#Skills"} />
            </div>
            <div className="bg-transparent" onClick={openProjectsFromNav}>
              <MenuOption MenuOption={"Projects"} menuTarget={"#Projects"} />
            </div>
            <div className="bg-transparent" onClick={downloadResume}>
              <MenuOption MenuOption={"Resume"} />
            </div>
            <div className="bg-transparent" onClick={openContactFromNav}>
              <MenuOption MenuOption={"Get in touch"} menuTarget={"#Contact"} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
