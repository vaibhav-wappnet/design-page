import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Main/Header";
import MainLayout from './Components/Main/MainLayout';

function App() {
  return (
    <div className="App bg-slate-200">
      <Sidebar />

      <div className="flex flex-col ">
        <Header />
        <MainLayout />
      </div>
    </div >
  );
}

export default App;
