import style from "./navbar.module.css";
import pic from "./asset/logo-4.png";

const Navbar = () => {
  return (
    <>
      <section id={style.nav}>
        <article>
          <div className={style.logo}>
            <img alt="Intellithink Image" src={pic} />
          </div>
          <div className={style.menu}>
            <ul>
              <li>
                <a
                  style={{
                    textDecoration: "underline",
                    textUnderlineOffset: "9px",
                    textDecorationColor: "#DA001A",
                  }}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="https://intellithink.in/">
                  Products <i class="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="https://intellithink.in/">
                  Industries <i class="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="https://intellithink.in/">
                  Resources <i class="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="https://intellithink.in/">
                  Company <i class="fa-solid fa-chevron-down"></i>
                </a>
              </li>
              <li>
                <button>Contact Us</button>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};
export default Navbar;
