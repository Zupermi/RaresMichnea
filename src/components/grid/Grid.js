import "./grid.css";

const options = ["Videoclipuri Muzicale", "Reclame", "Motion Graphics", "Prezentari Video"]

const Grid = () => {
    const gridOprions = options.map((option, index) => <div key={index} className="grid-item">{option}</div>)
    return (
        <div className="grid-container">{gridOprions}</div>
    )
}
 
export default Grid;