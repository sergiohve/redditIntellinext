import Header from "./components/Header";
import Best from "./views/Best";
import Hots from "./views/Hots";
import News from "./views/News";
import Risings from "./views/Risings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact={true} path="/" element={<Best />} />
          <Route exact={true} path="/hots" element={<Hots />} />
          <Route exact={true} path="/news" element={<News />} />
          <Route exact={true} path="/risings" element={<Risings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
