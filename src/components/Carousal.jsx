import style from "./carousal.module.css";
import tvs from "./asset/tvs.png";
import apollo from "./asset/apollo.png";
import amazon from "./asset/amazon.png";
import infyiot from "./asset/infyiot.png";
import biocon from "./asset/biocon.png";
const Carousal = () => {
  return (
    <>
      <div id={style.caras}>
        <div id={style.cara}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.662"
            height="21.083"
            viewBox="0 0 12.662 21.083"
          >
            <path
              id="Path_338"
              data-name="Path 338"
              d="M10068.387-13625.944l-8.42,8.421,8.42,8.42"
              transform="translate(-10057.846 13628.065)"
              fill="none"
              stroke="#cf0b23"
              stroke-linecap="round"
              stroke-width="3"
            />
          </svg>

          <img src={biocon} />
          <img src={infyiot} />
          <img src={amazon} />
          <img src={apollo} />
          <img src={tvs} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.662"
            height="21.083"
            viewBox="0 0 12.662 21.083"
          >
            <path
              id="Path_339"
              data-name="Path 339"
              d="M10059.967-13625.944l8.42,8.421-8.42,8.42"
              transform="translate(-10057.846 13628.065)"
              fill="none"
              stroke="#cf0b23"
              stroke-linecap="round"
              stroke-width="3"
            />
          </svg>
        </div>
      </div>
    </>
  )
}
export default Carousal;
