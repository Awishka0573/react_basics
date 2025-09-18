import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import { myData } from "./Data/myData";

const myDatain = myData.map(({ name, city, position, age, id, image }) => {
  return (
    <Main
      key={id}
      name={name}
      position={position}
      city={city}
      age={age}
      image={image}
    />
  );
});

function App() {
  const [myVar, setMyVar] = useState({
    name : 'Awishka ',
    position : 'developer',
    city : 'Kegalle',

  });

  const clickHandle = () => {
    setMyVar({
      ...myVar,
      name : 'Isuru ',
      position : 'developer',
      city : 'Kandy',
    }); 
  };

  return (
    <div className="main__container">
      <div className="header">
        AIK Learning React Course
        <h2>Awishka Isuru</h2>
        <h2>2024</h2>
        <h4>React Course ,JavaScript</h4>
      </div>
      <h2>{myVar.name}</h2>
      <h2>{myVar.position}</h2>
      <h2>{myVar.city}</h2>
      <div className="mainBlock_container">{myDatain}</div>
      <br />
      <br />
      <button
        style={{
          fontSize: "18px",
          padding: "7px 12px",
          backgroundColor: "blue",
          color: "white",
          fontWeight: "bold",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={clickHandle}
      >
        Click Here
      </button>
    </div>
  );
}

export default App;
