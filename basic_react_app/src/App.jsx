import { SayMyName } from "./components/SayMyName";
import { ShowData } from "./components/ShowData"
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Button>Clique em mim</Button>
        <SayMyName name="Luch" />
        <Counter />
        <ShowData />
      </header>
    </div>
  );
}

export default App;
