import style from "./page2.module.css";
import invest from "./asset/investigation.png";
import respon from "./asset/responsive.png";
import strategy from "./asset/strategy.png";
import stopwatch from "./asset/stopwatch.png";
import spiral from "./asset/spiral.svg"
import bgpic from "./asset/mask.svg";
import style2 from "./content.module.css"
const Page2 = () => {
  return (
    <>
      <div id={style.page2}>
        <div className={style.left}>
          <div className="row">
            <div className="col">
            <div className={style.col}><img src={strategy} />
              <h4>End-to-end Solution</h4>
              <hr style={{width:"30%",margin:"auto",height:"3px", background:"#DA001A",borderWidth:"0"}}/>
              <p>We span the whole process from intelligent sensors to machine analysis</p></div>
              
            </div>
            
            <div style={{marginTop:"40px"}} className="col">
            <div  className={style.col}>
              <img src={invest} />
              <h4>Actionable Insights</h4>
              <hr style={{width:"30%",margin:"auto",height:"3px", background:"#DA001A",borderWidth:"0"}}/>
              <p>Intelligent sensors/devices and Artificial Intelligence solutions to provide early and actionable insights into machine health</p>
            </div>
            </div>
            <div className="row">
            <div  className="col">
            <div className={style.col}>
              <img src={respon} />
              <h4>Device as a Service</h4>
              <hr style={{width:"30%",margin:"auto",height:"3px", background:"#DA001A",borderWidth:"0"}}/>
              <p>The ability to scale devices up and down as needed, pushing cost from capital expenditures to operating expense</p>
            </div>
            </div>
            <div style={{marginTop:"40px"}} className="col">
            <div className={style.col}>
              <img src={stopwatch} />
              <h4>Fastest time to value</h4>
              <hr style={{width:"30%",margin:"auto",height:"3px", background:"#DA001A",borderWidth:"0"}}/>
              <p>Plug and play solutions that ensures a rapid time-to-value without having to build complicated custom solutions</p>
            </div>
            </div>
          </div>
  </div>
        </div>
        <div className={style.right}>
          <img id={style.img} src={bgpic} />
          <div>
            <h1>
              The Intellithink{" "}
              <span style={{ color: "#DA001A" }}>Advantage</span>

            </h1>
            <img style={{marginLeft:"350px",height:"70%"}} src={spiral}/>
            <p>
              Intellithink combines the potential of vibration and current
              signature analysis with AI to detect fault conditions and the
              extent of these faults.
            </p>
            <button id={style2.btn}>Know more</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page2;
