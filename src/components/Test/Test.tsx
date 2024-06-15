import { FC } from 'react';
import style from './Test.module.scss';
import ReusableButton from '../ReusableButton/ReusableButton';

const Test: FC = () => {
  return (
    <main>
      <div className={style.test}>Test</div>
    </main>
  );
};

export default Test;
