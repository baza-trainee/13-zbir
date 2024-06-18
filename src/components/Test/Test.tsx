import { FC } from 'react';
import style from './Test.module.scss';
const Test: FC = () => {
  return (
    <main>
      <div className={style.test}>Test</div>
      <ScrollUpBtn />
    </main>
  );
};
