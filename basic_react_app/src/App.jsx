import { SayMyName } from "./components/SayMyName";
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { Logo } from "./components/Logo";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Button>Clique em mim</Button>
        <SayMyName name="Luch" />
        <Form.root>
          <Form.password />
          <Form.submit />
        </Form.root>
        <Counter />
      </header>
    </div>
  );
}

export default App;
