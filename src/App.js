import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Clock from "./components/Clock";


const App = () => {
    return <>
        <Header />
            <Routes>
                <Route index element={<Main />} errorElement={<Clock />}/>
                <Route path="about" element={<About />} errorElement={<Clock />}/>
                <Route path="contact" element={<Contact />} errorElement={<Clock />}/>
            </Routes>
        <Footer />
    </>
};

export default App;