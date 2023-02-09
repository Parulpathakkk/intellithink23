import style from "./page1.module.css";
import bgpic from "./asset/mask.svg";
import group from "./asset/group.png";
import spiral from "./asset/spiral.svg";
import style2 from "./content.module.css"
const Page1 = () => {
  return (
    <>
      <img id={style.img} src={bgpic} />
      <div id={style.page1}>
        <div className={style.left}>
          <h1>
            Condition based Monitoring that{" "}
            <span style={{ color: "#DA001A" }}> works</span>
          </h1>
          <img style={{ marginLeft: "350px", height: "5%" }} src={spiral} />
          <p>
            Intellithink combines the potential of vibration and current
            signature analysis with AI to detect fault conditions and the extent
            of these faults in rotating equipment.
          </p>
          <p>
            Our robust Machine Learning algorithms aid in mitigating potential
            motor failure anywhere from weeks to months ahead of more standard
            vibration-based solutions. Our techniques are capable of predicting
            the most commonly occurring fault conditions in 3-phase induction
            motors and rotating equipment.
          </p>
          <button id={style2.btn}>Request a demo</button>
        </div>
        <div className={style.right}>
          <img src={group} />
        </div>
      </div>
    </>
  );
};
export default Page1;
