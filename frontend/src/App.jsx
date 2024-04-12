import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gradient-to-br from-blue-500 via-blue-400 to-gray-800 w-full flex flex-col items-center pb-10">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
