import './App.css';
import Main from './Components/Main';

function App() {
  return (
    <>
    <div>
      AIK Learning React Course
      <h1>Awishka</h1>

    </div>
    <h2>Awishka Isuru</h2>
    <Main name= 'Isuru' city= 'Kegalle' position='devoloper'>
      <h5>I am Awishka Isuru</h5>
      <p>I m children now</p>
    </Main>
    <Main name= 'Ahinsa' city= 'Mathara' position='Accountant'/>
    <Main name= 'Umayangani' city= 'galle' position='Accountant'/>
    <Main />
    <Main />
    <Main />
    <Main />
    <Main />
    </>
  );
}

export default App;
