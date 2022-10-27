import Home from "../../screens/Home/Home";
import NavBar from "../../components/Home/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailConteiner from "../productos/itemDetailConteiner"


const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      
          <Route path="/" element={<Home />}></Route>
          <Route path="/categoria/:category" element={<Home />}></Route>
          <Route path="/:cat/:productoId" element={<ItemDetailConteiner/>}></Route>
      </Routes>

    </BrowserRouter>
  );
};



export default Router;
