import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import { myData } from "./Data/myData";



function App() {
  const [myVar, setMyVar] = useState({
    name : 'Awishka ',
    position : 'developer',
    city : 'Kegalle',

    
  });

  const[myDataState,setMyDataState] = useState(myData);

  const myDatain = myDataState.map(({ name, city, position, age, id, image }) => (
  
    <Main
      key={id}
      name={name}
      position={position}
      city={city}
      age={age}
      image={image}
    />
 
));

  const clickHandle = () => {
    setMyVar({
      ...myVar,
      name : 'Isuru ',
      position : 'developer',
      city : 'Kandy',
    }); 
 

  console.log(myDataState);


  setMyDataState([
    ...myDataState, 
    {
      id:1234567,
      name : 'Praveen ', 
      position : 'ui/ux designer', 
      city : 'Kandy', 
      age : '25', 
      image : 'https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-businessman-father-grandfather_693685_wh1200.png',
    },
  ]);
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
