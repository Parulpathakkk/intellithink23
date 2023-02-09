import style from "./page3.module.css";
import pagebg from "./asset/pagebg.png";
import spiral from "./asset/spiral.svg";
import mask from "./asset/mask.svg";
import logo from "./asset/logo-4.png";
import fb from "./asset/fb.svg";
import linkedin from "./asset/linkedin.svg";
import youtube from "./asset/youtube.svg";
import style2 from "./content.module.css"
const Page3 = () => {
  return (
    <>
      <div id={style.page3}>
        <img height="50%" width="100%" src={pagebg} />
        <div className={style.action}>
          <img id={style.img} src={mask} />
          <div className={style.action2}>
            <h2>
              Ready to see{" "}
              <span style={{ color: "#DA001A" }}>Intellithink</span> in action?
            </h2>
            <img style={{ marginLeft: "250px", height: "70%" }} src={spiral} />
            <p>Book a 30-minute demo at your convenience</p>
            <button style={{marginBottom:"10px"}} id={style2.btn}>Request a demo</button>
          </div>
        </div>
        <div id={style.footer}>
          <div style={{marginTop:"-200px"}} className={style.logo}>
            <img src={logo} />
          </div>
          <div className={style.tables}>
            <div class="row">
              <div class="col">
                <h4>Products</h4>

                <ul>
                  <li>
                    <a href="/">IntelliVibe</a>
                  </li>
                  <li>
                    <a href="/">IntelliAmp</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <h4>Industries</h4>
                <ul>
                  <li>
                    <a href="/">Cement</a>
                  </li>
                  <li>
                    <a href="/">Steel</a>
                  </li>
                  <li>
                    <a href="/">Power Generation</a>
                  </li>
                  <li>
                    <a href="/">Oil & Gas</a>
                  </li>
                  <li>
                    <a href="/">Food</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="/">Blogs</a>
                  </li>
                  <li>
                    <a href="/">Case Studies</a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                </ul>
              </div>
              <div style={{ marginRight: "16px" }} class="col">
                <h4>Connect</h4>
                <a href="/">
                  <i class="fa-sharp fa-solid fa-paper-plane"></i>{" "}
                  info@intellithink
                </a>
                <div id={style.socials}>
                  <a href="/">
                    <img src={fb} />
                  </a>
                  <a href="/">
                    <img src={linkedin} />
                  </a>
                  <a href="/">
                    <img src={youtube} />
                  </a>
                </div>
              </div>
            </div>
            <footer id={style.footer}>
              <p>Copyright © 2022 Intellithink. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page3;
