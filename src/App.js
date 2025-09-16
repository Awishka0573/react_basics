import './App.css';
import Main from './Components/Main';
import myData from './Data/myData';


function App() {
  return (
    <>
    <div>
      AIK Learning React Course
      <h1>Awishka</h1>

    </div>
    <h2>Awishka Isuru</h2>
    {
      myData.map(({name,city,position,age,id})=>{
        return <Main key={id} name={name} position={position} city={city} age={age} />
      })
    }
   
    </>
  );
}

export default App;
