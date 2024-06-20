import { FC } from 'react';
import Header from './components/Header/Header';
import './styles/index.scss';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import HowItWorks from "./components/HowItWorks/HowItWorks";
import ImportantInfo from './components/ImportantInfo/ImportantInfo';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';
import Progress from './components/Progress/Progress';

const App: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Progress />
      <About />
      <HowItWorks />
      <ScrollUpBtn />
      <ImportantInfo />
      <Footer />
    </>
  );
};

export default App;
