import { IinValidator } from './components/iinValidator';
import { useState } from 'react';
import './App.css'
import { Result } from './components/result';

function App() {
  const [data, setData] = useState('');
  return (
    <div className='App'>
      <div></div>
      <div id='mainContent'>
        <h1>Проверка по иин (Казахстан)</h1>
        <IinValidator setData={setData} />
        <Result data={data}/>
      </div>
      <div></div>
    </div>
  );
}

export default App;
