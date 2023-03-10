import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Main/Header";
import MainLayout from './Components/Main/MainLayout';

function App() {
  return (
    <div className="App flex flex-row">
      <Sidebar />

      <div className="flex flex-col w-full px-4 ml-[268px]">
        <Header />
        <MainLayout />
      </div>
    </div >
  );
}

export default App;
