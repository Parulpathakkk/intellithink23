import Navbar from "./components/Navbar";
import style from "./components/navbar.module.css";
import sample from "./components/video.mp4";
import Page1 from "./components/Page1";
import Carousal from "./components/Carousal";
import Content from "./components/Content";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
const App = () => {
  return (
    <div>
      <div id={style.landingpage}>
        <video id={style.video} src={sample} autoPlay loop muted />
        <Navbar />
        <Content />
        <Carousal />
        <Page1 />
        <Page2 />
        <Page3 />
      </div>
    </div>
  );
};
export default App;
