'./App.css'
export default function BOX(props) {
    return (
        <div className="box" style={{borderColor: props.color, background: props.color}}>

        </div>
    );
    
}