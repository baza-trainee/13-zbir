import { FC } from 'react';
import Test from './components/Test/Test';
import About from './components/About/About';
import './styles/index.scss';
import ImportantInfo from './components/ImportantInfo/ImportantInfo';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';

const App: FC = () => {
  return (
    <>
      <header className="container">Header</header>
      <Test />
      <About />
      <ImportantInfo />
      <ScrollUpBtn />
      <footer>Footer</footer>
    </>
  );
};

export default App;
