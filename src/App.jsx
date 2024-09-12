import "./App.css";
import WaitTime from "./components/WaitTime";
import TopBar from "./components/TopBar";
import OptionTabs from "./components/OptionTabs";

function App() {
  return (
    <div
      className="App"
      style={{ width: window.innerWidth > 700 ? "700px" : "100vw" }}
    >
      <TopBar />
      <WaitTime />
      <OptionTabs />
    </div>
  );
}

export default App;
