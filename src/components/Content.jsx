import style from "./content.module.css"
const Content=()=>{
    return(
        <div id={style.content}>
            <h1>Building the future of machine analytics</h1>
            <p>8 out of 10 manufacturers say the elimination of unplanned downtime is a number one or high priority to them. Explore how Intellithink can bring the future of machine health analytics using sensors and Artificial Intelligence</p>
            <button id={style.btn}>Request a demo</button>
        </div>
    )
}
export default Content;