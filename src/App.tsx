import { FC } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ImportantInfo from './components/ImportantInfo/ImportantInfo';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';
import Progress from './components/Progress/Progress';
import CallShare from './components/CallShare/CallShare';
import './styles/index.scss';

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Progress />
        <About />
        <HowItWorks />
        <ScrollUpBtn />
        <ImportantInfo />
        <CallShare />
      </main>
      <Footer />
    </>
  );
};

export default App;
