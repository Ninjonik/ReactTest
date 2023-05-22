
import './App.css';
import { FC } from 'react'
import HelloWorld from './components/HelloWorld'
import Clock from './components/Clock';

const App: FC = () => {
  return (
    <div className="App background-img">  
      <div className="grid h-screen place-items-center">
        <div>
          <h1 className="text-3xl font-bold first-letter:underline">
            <HelloWorld /> 
          </h1>
          <h2 className="font-light"><Clock /></h2>
        </div>
      </div>
    </div>
  );
}

export default App;