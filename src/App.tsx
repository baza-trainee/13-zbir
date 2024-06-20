import { FC } from 'react';
import Header from './components/Header/Header';
import './styles/index.scss';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import ImportantInfo from './components/ImportantInfo/ImportantInfo';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';
import Progress from './components/Progress/Progress';
import CallShare from './components/CallShare/CallShare';

const App: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Progress />
      <About />
      {/* <HowItWorks /> */}
      <ScrollUpBtn />
      <ImportantInfo />
      <CallShare/>
      <footer>Footer</footer>
    </>
  );
};

export default App;
