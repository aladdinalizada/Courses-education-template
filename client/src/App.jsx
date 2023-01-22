import "./App.css";
import BackToTop from "./components/back-to-top";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Hero from "./pages/introduction";
import Routing from "./routing";

function App() {
  return (
    <div className="App">
      <BackToTop/>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
