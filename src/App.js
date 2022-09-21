
import './App.css';
import { CardOne } from './Card';
import { CardThree } from './CardThree';
import { CardTwo } from './CardTwo';

function App() {
  return (
    <div className="App">
      {/* <div className="container-header"> */}
          {/* <h1>Header</h1> */}
      {/* </div> */}

      <div className='Cards'>
        <CardOne/>
        <CardTwo/>
        <CardThree/>
      </div>
        
    </div>
  );
}

export default App;


