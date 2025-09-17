import './App.css';
import Main from './Components/Main';
import {myData} from './Data/myData';
import {myData2} from './Data/myData';


const myDatain =myData.map(({name,city,position,age,id})=>{
        return <Main key={id} name={name} position={position} city={city} age={age} />
      })



function App() {
  return (
    <div className="main__container">
    <div>
      AIK Learning React Course
      <h2>Awishka Isuru</h2>
      <h2>2024</h2>
      <h4>React Course ,JavaScript</h4>

    </div>
    <h2>Awishka Isuru</h2>
    <div className='mainBlock_container'>
    { myDatain }
    </div>
    

    </div>
  );
}

export default App;
