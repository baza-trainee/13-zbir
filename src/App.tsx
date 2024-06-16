import { FC } from 'react';
import Test from './components/Test/Test';
import About from './components/About/About';
import './styles/index.scss';
import ImportantInfo from './components/ImportantInfo/ImportantInfo';

const App: FC = () => {
  return (
    <>
      <header className="container">Header</header>
      <Test />
      <About />
      <ImportantInfo />
      <footer>Footer</footer>
    </>
  );
};

export default App;
