// import { FC, useState } from 'react';
import { FC } from 'react';
import style from './Progress.module.scss';

const Progress: FC = () => {
  // const [progress, setProgress] = useState(0);

  return (
    <section className={`${style.sectonWrapper} container`}>
      <h2 className={style.progressTitle}>
        Підтримай наших героїв - разом для перемоги!
      </h2>
      <ul className={style.progressInfoWrapper}>
        <li>
          <p className={style.desc}>Зібрано</p>
          {/* <p className={style.descBalance}>{progress} грн</p> */}
          <p className={style.descBalance}>0 грн</p>
        </li>
        <li>
          <p className={style.desc}>Ціль збору</p>
          <p className={style.descBalance}>90 000 грн</p>
        </li>
      </ul>
      <div className={style.progressWrapper}>
        {/* <div className={style.progressBar} style={{ width: progress }} /> */}
        <div className={style.progressBar} style={{ width: 0 }} />
      </div>
    </section>
  );
};

export default Progress;
