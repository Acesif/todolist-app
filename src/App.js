import './App.css';
import "@fontsource/poppins";
import "@fontsource/poppins/400.css"
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';


function App() {
  return (
    <div className="App">
      <div className="section">
        <Sidebar/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
