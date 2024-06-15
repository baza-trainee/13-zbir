import { FC } from 'react';
import style from './Test.module.scss';
import ReusableButton from '../ReusableButton/ReusableButton';

const Test: FC = () => {
  return (
    <main>
      <div className={style.test}>Test</div>
      <ReusableButton href="url" target="_blank" rel="noopener noreferrer">
        Задонатити
      </ReusableButton>
      <ReusableButton onClick={() => alert('Hello')}>
        Поділитися збором
      </ReusableButton>
    </main>
  );
};

export default Test;
