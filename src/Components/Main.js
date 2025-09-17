import { Fragment } from "react/jsx-runtime";

function Main({children,name,city,position,age,image}) {
    return (
        <div>
        <img src={image? `${image}` : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_incoming&w=740&q=80"} 
        
        alt="cardImg" />
        
        <div className="mainBlock__details">
            <h3>{name ? name : "no-name"}</h3>
            <p>
                <span>{city}</span>
                <span>{position}</span>
            </p>
            <p>{age} years old</p>
        </div>
        </div>
    );
}

export default Main;