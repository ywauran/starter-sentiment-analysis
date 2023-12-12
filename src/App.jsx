import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Comment from "./pages/Comment";
import Preprocessing from "./pages/Preprocessing";
import Processing from "./pages/Processing";
import Validation from "./pages/Validation";
function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="p-10 mt-24">
        <Routes>
          <Route path="/" element={<Comment />} />
          <Route path="/preprocessing" element={<Preprocessing />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/validation" element={<Validation />} />
        </Routes>
      </main>
      <footer className="fixed bottom-0 w-full py-4 text-center text-white bg-gray-800">
        Sentimen Analisis Sentimen
      </footer>
    </>
  );
}

export default App;
