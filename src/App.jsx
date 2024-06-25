import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <MyFooter />
    </div>
  );
}

export default App;
