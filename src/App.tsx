import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import FooterWidget from "./components/shared/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />

        <div>
          {/* Render the current route's component here */}
          <Outlet />
        </div>
        <FooterWidget />
      </div>
    </>
  );
}

export default App;
