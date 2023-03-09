import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Main/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
