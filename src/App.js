import { createContext, useState } from 'react';
import './App.css';
import Child1 from './components/Child1/Child1';
import Child2 from './components/Child2/Child2';

export const AppContext = createContext(null);

const App = () => {
  const [ data, setData ] = useState('');

  return (
    <div className='app'>
      <>
        <AppContext.Provider value={{ data, setData}}>
          <Child1 />
          <Child2 />
        </AppContext.Provider>
      </>
    </div>
  );
}

export default App;
