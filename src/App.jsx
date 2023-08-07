// import logo from './logo.svg';

import './style/App.css';

import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
// funkcinis komponentas yra funkcija
// prasideda didzija raide
// grazina jsx

function App() {
  // const now = new Date();
  // const formatedDate = now.toLocaleString('LT-lt', {dateStyle: 'full'})
  return (
    <div className='App container'>     
     <div className="cardList grid3">   
      <Card1 />
      <Card2 />
      <Card3 />   
     </div>     
    </div>
  );
}

export default App;