import "./App.css";
// import { BrowserRouter } from "react-router-dom";
// import {Routes, Route} from "react-router-dom";
// import Header from "./header/Header";
import Banner from "./banner/Banner";
import Notice from "./notice/Notice";
import Subject from "./subject/Subject";
import SmallSubject from "./subject/SmallSubject";
import Footer from "./footer/Footer";
import Dial from "./etc/Dial";
import Navbar from "./header/Navbar";

// import Test from "./subject/Test";

// 머티리얼 ui

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="Banner">
          <Banner />
        </div>
        <div>
          <Notice />
        </div>
        <div>
          <Subject number={10} />
          <SmallSubject name={"CA"} />
          <SmallSubject name={"etc"} />
          <Subject number={9} />
          <Subject number={8} />
        </div>
      </main>
      <div className="Footer">
        <Footer />
      </div>
      <Dial />
      <Navbar />
      {/* <Test /> */}
    </>
  );
}

export default App;
