import { FC } from "react";
import Test from "./components/Test/Test";
import About from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import "./styles/index.scss";

const App: FC = () => {
  return (
    <>
      <header className="container">Header</header>
      <Test />
      <About />
      <HowItWorks />
      <footer>Footer</footer>
    </>
  );
};

export default App;
