import "./App.css";
import Header from "./layouts/header";
import Hero from "./pages/introduction";
import Routing from "./routing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing/>
    </div>
  );
}

export default App;
