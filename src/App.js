import './App.css';
import Main from './Components/Main';
import {myData} from './Data/myData';
import {myData2} from './Data/myData';


const myDatain =myData.map(({name,city,position,age,id})=>{
        return <Main key={id} name={name} position={position} city={city} age={age} />
      })



function App() {
  return (
    <>
    <div>
      AIK Learning React Course
      <h1>Awishka</h1>

    </div>
    <h2>Awishka Isuru</h2>
    { myDatain 
    }
   
    </>
  );
}

export default App;
