
import "./App.css";
import NavBar from "./components/NavBar";

import ItemListContainer from "./components/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route
            path="*"
            element={
              <div style={{ backgroundColor: "red" }}> ERROR</div>
            }
          />
          <Route path="/cart" element={<div>Carrito</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
