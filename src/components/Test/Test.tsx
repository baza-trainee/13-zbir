import { FC } from 'react';
import style from './Test.module.scss';
// import ReusableButton from '../ReusableBtn/ReusableBtn';

const Test: FC = () => {
  return (
    <main>
      <div className={style.test}>Test</div>
      <ScrollUpBtn />
    </main>
  );
};

export default Test;
