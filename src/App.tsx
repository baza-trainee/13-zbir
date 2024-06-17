import { FC } from 'react';
import About from './components/About/About';
import './styles/index.scss';
import ImportantInfo from './components/ImportantInfo/ImportantInfo';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';

const App: FC = () => {
  return (
    <>
      <header className="container">Header</header>
      <About />
      <ImportantInfo />
      <ScrollUpBtn />
      <footer>Footer</footer>
    </>
  );
};

export default App;
