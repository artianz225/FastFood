import './App.css';
import './Pages/Nav.css';
import { createBrowserRouter, NavLink, Route, createRoutesFromElements, RouterProvider, Outlet } from 'react-router-dom';
import Home from './Pages/Home';
import MainProfile from './Pages/MainProfile';
import MainMenus from './Pages/MainMenus';
import PlaceOrdered from './Pages/PlaceOrdered';
import CheckOut from './Pages/CheckOut';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';

function App() {

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const hanleToggleSideBar = () => {
    setToggleSidebar(!toggleSidebar);
  }

  return (
    <div>
      {/* <Sidebar toggleSidebar={toggleSidebar} hanleToggleSideBar={hanleToggleSideBar}/>   */}
      <Home toggleSidebar={toggleSidebar} hanleToggleSideBar={hanleToggleSideBar} />
      {/* <MainProfile />  */}
      {/* <MainMenus toggleSidebar={toggleSidebar} hanleToggleSideBar={hanleToggleSideBar}/> */}
      {/* <PlaceOrdered /> */}
      {/* <CheckOut /> */}
    </div>
  )
}

export default App
