import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Workertable from "./componant/worker/Workertable";
import Login from "./componant/login/Login";
import Sidebar from "./componant/sidebar/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/workertable" element={<Workertable/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
