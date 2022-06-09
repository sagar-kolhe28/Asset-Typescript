import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import LogIn from "./constants/login";
import SideBar from "./constants/Sidebar";
import DashBoard from "./DashBoard";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/DashBoard" element={<DashBoard />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
