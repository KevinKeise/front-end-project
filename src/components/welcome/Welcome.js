
import "./Welcome.css";

const Welcome = ({nome}) => {
    return(
        <div className="container-welcome">
            <h2>Welcome, <span>{nome}</span></h2>
            <p >Dea msidjai nasud</p>
        </div>
    );
}

export default Welcome;