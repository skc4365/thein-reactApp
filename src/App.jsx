import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HOME from "./pages/HOME";
import ABOUT from "./pages/ABOUT";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import CONTACK from "./pages/CONTACK";

function App() {
  return (
    <>
      <Routes>
        {/* 공통 layout */}
        <Route path="/" element={<Layout />}>
          <Route path="menu1" element={<HOME />} />

          <Route path="menu2" element={<ABOUT />}>
            {/* <Outlet /> */} 
            <Route path="sub1" element={<Skills />} />
            <Route path="sub2" element={<Projects />} />
          </Route>

          <Route path="menu3" element={<CONTACK />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
