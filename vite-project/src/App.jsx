
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Adminpanel from "./Pages/Adminpanel";
import Update from "./Pages/Update";
import Addproducts from "./Pages/Addproducts";
import UserLayout from "./Layout/User/UserLayout";
import Adminlayout from "./Layout/Admin/Adminlayout";
import Basket from "./Pages/Basket";
import Detail from "./Pages/Detail";
import MainProvider from "./context/MainProvider";
import Wishlist from "./Pages/Wishlist";

function App() {
 

  return (
    <>
    <MainProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="/detail/:idDetail" element={<Detail/>} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<h1>No Page</h1>} />
        </Route>
        <Route path="admin/" element={<Adminlayout />}>
        <Route path="adminpanel" element={<Adminpanel />} />
        <Route path="/admin/adminpanel/update/:id" element={<Update />} />
        <Route path="addproduct" element={<Addproducts />} />
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
