import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Footer from "./Footer";
import { Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header title = "Facebook"/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Missing/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
