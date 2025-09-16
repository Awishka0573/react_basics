import './App.css';
import Main from './Components/Main';

const myData = [
  {
    id:1,
  name : 'Awishka ',
  position : 'developer',
  city : 'Kegalle',
  age : '22',
  },
  {
     id:12,
  name : 'sandesh',
  position : 'developer',
  city : 'Kegalle',
  age : '22',
  },
  {
     id:123,
  name : 'Ahinsa ',
  position : 'developer',
  city : 'Mathara',
  age : '22',
  },
  {
     id:1234,
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
      myData.map(({name,city,position,age,id})=>{
        return <Main key={id} name={name} position={position} city={city} age={age} />
      })
    }
   
    </>
  );
}

export default App;
