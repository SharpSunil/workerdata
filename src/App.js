import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Workertable from "./componant/worker/Workertable";
import Login from "./componant/login/Login";
import Sidebar from "./componant/sidebar/Sidebar";
import Addworker from "./componant/worker/Addworker";

function App() {
  return (
    <>
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/addworker" element={<Addworker/>} />
          <Route path="/workertable" element={<Workertable/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
