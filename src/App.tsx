import { FC } from "react";
import Header from "./components/Header/Header";
import "./styles/index.scss";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";


const App: FC = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Footer/>
    </>
  );
};

export default App;
