import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Hero from "./pages/introduction";
import Routing from "./routing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
      <div style={{ height: "1rem" }} />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        style={{
          position: "fixed",
          padding: "1.3rem",
          fontSize: "20px",
          bottom: "40px",
          right: "40px",
          backgroundColor: "#c86fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlignLast: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <i class="fa-sharp fa-solid fa-turn-up" style={{
          padding: "0.8rem",
        }}></i>
      </button>
    </div>
  );
}

export default App;
