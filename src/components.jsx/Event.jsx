
const Event = (props) =>{
    return(
    <div className = {'event '}>
        <img src = {props.source}></img>
        <h5>{props.name}</h5>
        <p>{props.time}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer" >
        <button>{props.button}</button>
      </a>
    </div>
    )

}
export default Event;