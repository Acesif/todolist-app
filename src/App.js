import './App.css';
import "@fontsource/poppins";
import "@fontsource/poppins/400.css"
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import { createContext, useState } from 'react';

export const Context = createContext();
export const activeContext = createContext();

function App() {
  const [tab,setTab] = useState(0)
  const [active,setActive] = useState(false)
  return (
    <div className="App">
      <activeContext.Provider value={[active,setActive]}>
        <Context.Provider value={[tab,setTab]}>
          <div className="section">
            <Sidebar/>
            <Content/>
          </div>
        </Context.Provider>
      </activeContext.Provider>
    </div>
  );
}

export default App;
