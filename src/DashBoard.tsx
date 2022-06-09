import Assets from "./Assets/Assets";
import SideBar from "./constants/Sidebar";
import "./App.css";
import Header from "./header/Header";

function DashBoard() {
  return (
    <>
      <div>
        <SideBar />
      </div>
      {/* <div className="headeroneach">
        <Header />
      </div> */}
      <div className="text-9">
        <h1> welcome to DashBoard</h1>
      </div>
      <div>
        <Assets />
      </div>
    </>
  );
}

export default DashBoard;
