import "./grid.css";
import options from "./options";

const Grid = () => {
    const gridOprions = options.map((option, index) => <div key={index} className="grid-item"><p key={index} >{option.text}</p><img src={option.background} alt={option.text} /></div>)
    return (
        <div className="grid-container">{gridOprions}</div>
    )
}
 
export default Grid;