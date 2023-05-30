import './App.css';
import "@fontsource/poppins";
import "@fontsource/poppins/400.css"
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import { createContext, useState } from 'react';

export const Context = createContext()

function App() {
  const [tab,setTab] = useState(0)
  return (
    <div className="App">
      <Context.Provider value={[tab,setTab]}>
        <div className="section">
          <Sidebar/>
          <Content/>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
