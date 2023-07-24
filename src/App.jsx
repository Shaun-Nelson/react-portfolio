import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./styles.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
