import Expenses from "./components/Expenses/Expenses";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Personal Finance Tracker</h1>
        <p>Manage your expenses efficiently</p>
      </header>

      <Expenses />
    </div>
  );
}

export default App;
