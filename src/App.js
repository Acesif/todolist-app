import { createContext, useState } from 'react';
import './App.css';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';

export const context = createContext()

function App() {
  const [tab,setTab] = useState(0);
  return (
    <context.Provider value={[tab,setTab]}>
      <div className="App">
        <Sidebar/>
        <Content/>
      </div>
    </context.Provider>
  );
}

export default App;
