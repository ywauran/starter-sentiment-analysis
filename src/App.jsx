import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Comment from "./pages/Comment";
import Preprocessing from "./pages/Preprocessing";
import Processing from "./pages/Processing";
import Validation from "./pages/Validation";
import { CommentProvider } from "./context/CommentContext";
import { ProcessedDataProvider } from "./context/ProcessedDataContext";
import { ResultProvider } from "./context/ResultContext";

function App() {
  return (
    <CommentProvider>
      <ProcessedDataProvider>
        <ResultProvider>
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
              Sentiment Analysis
            </footer>
          </>
        </ResultProvider>
      </ProcessedDataProvider>
    </CommentProvider>
  );
}

export default App;
