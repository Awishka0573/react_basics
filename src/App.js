import './App.css';
import Main from './Components/Main';

const myData = [
  {
  name : 'Awishka ',
  position : 'developer',
  city : 'Kegalle',
  age : '22',
  },
  {
  name : 'sandesh',
  position : 'developer',
  city : 'Kegalle',
  age : '22',
  },
  {
  name : 'Ahinsa ',
  position : 'developer',
  city : 'Mathara',
  age : '22',
  },
  {
  name : 'Isuru ',
  position : 'developer',
  city : 'Mathara',
  age : '22',
  },
];


function App() {
  return (
    <>
    <div>
      AIK Learning React Course
      <h1>Awishka</h1>

    </div>
    <h2>Awishka Isuru</h2>
    {
      myData.map(ele=>{
        return <Main name={ele.name} position={ele.position} city={ele.city} age={ele.age} />
      })
    }
   
    </>
  );
}

export default App;
