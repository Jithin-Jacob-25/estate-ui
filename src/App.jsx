import HomePage from "./routes/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  )
}

export default App