import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
// import SingleRoute from "./pages/single-route/SingleRoute";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Login />} />
        {/* <Route path="/products/:id" element={<SingleRoute />} /> */}
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
