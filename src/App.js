
import './App.css';
import Header from './component/Header/Header';
import Pricing from './component/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <h1 className='text-4xl'>WelCome to my pricr club</h1>
     <Pricing></Pricing>
    </div>
  );
}

export default App;
