import { FC } from "react";
import Header from "./components/Header/Header";
import "./styles/index.scss";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ImportantInfo from './components/ImportantInfo/ImportantInfo';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';

const App: FC = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About />
      <ImportantInfo />
      <Footer/>
    </>
  );
};

export default App;
