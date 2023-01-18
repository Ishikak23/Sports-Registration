import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App" data-testid="sport-registration">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
