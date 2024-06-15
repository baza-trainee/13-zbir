import { FC } from "react";
import Header from "./components/Header/Header";
import "./styles/index.scss";
import Hero from "./components/Hero/Hero";


const App: FC = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <footer>Footer</footer>
    </>
  );
};

export default App;
