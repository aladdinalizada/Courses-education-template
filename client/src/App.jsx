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
    </div>
  );
}

export default App;
