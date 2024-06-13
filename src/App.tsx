import { FC } from "react";
import Test from "./components/Test/Test";
import "./styles/index.scss";

const App: FC = () => {
  return (
    <>
      <header className="container">Header</header>
      <Test />
      <footer>Footer</footer>
    </>
  );
};

export default App;
