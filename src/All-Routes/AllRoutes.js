import {Routes, Route} from 'react-router-dom';
import AdminForm from '../Pages/Admin/AdminForm';
import Dashboard from '../Pages/Admin/Dashboard';


import Cart from '../Pages/Cart/Cart';
import Checkout from '../Pages/Checkout/Checkout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import AllProduct from '../Pages/Product/AllProduct';
import SingleProduct from '../Pages/Product/SingleProduct';
import Signup from '../Pages/Signup/Signup';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Admin from "../Pages/Admin/Admin"
import PrivateRoute from './PrivateRoute';
/*
Dont make any changes to this file
*/

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<><Navbar /> <Home />  <Footer /></>} />
            <Route path="/login" element={<><Navbar /> <Login/> <Footer /></>} />
            <Route path="/signup" element={ <><Navbar /> <Signup />  <Footer /></>} />
            <Route path="/product" element={   <><Navbar /> <AllProduct />   <Footer /></>} />
            <Route path="/product/:id" element={<><Navbar /><SingleProduct /> <Footer /></>} />
            <Route path="/cart"             element={<><Navbar /><PrivateRoute><Cart /></PrivateRoute>    <Footer /></>} />
            <Route path="/checkout"         element={<><Navbar /><PrivateRoute><Checkout /> </PrivateRoute> <Footer /></>} />
            <Route path="/admin/dashboard" element={<Admin> <Dashboard /> </Admin> } />
            <Route path="/admin/adminForm" element={<Admin> <AdminForm /> </Admin>} />
          
            



        </Routes>
    );
}

export default AllRoutes;