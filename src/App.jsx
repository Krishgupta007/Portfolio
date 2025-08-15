import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./assets/pages/home";
import { NotFound } from "./assets/pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
