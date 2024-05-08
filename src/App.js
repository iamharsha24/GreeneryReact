import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PostAbout from "./components/PostAbout";
import Bestseller from "./components/Bestseller";
import CustomerReview from "./components/CustomerReview";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home'></Route>
      </Routes>
      <Header/>
      <PostAbout/>
      <Bestseller/>
      <CustomerReview/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
