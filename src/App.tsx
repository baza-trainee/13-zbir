import { FC } from 'react';
import About from './components/About/About';
import './styles/index.scss';
import ImportantInfo from './components/ImportantInfo/ImportantInfo';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';
import Progress from './components/Progress/Progress';

const App: FC = () => {
  return (
    <>
      <header className="container">Header</header>
      <Progress />
      <About />
      <ImportantInfo />
      <ScrollUpBtn />
      <footer>Footer</footer>
    </>
  );
};

export default App;
