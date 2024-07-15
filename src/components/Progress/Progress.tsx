import { FC, useState, useEffect } from 'react';
import fetchJar from '../../api/fetchJar';
import style from './Progress.module.scss';

const Progress: FC = () => {
  const [balance, setBalance] = useState(0);
  const width = balance ? `${(balance / 500).toFixed(1)}%` : '0%';

  useEffect(() => {
    fetchJar(setBalance);
  }, []);

  return (
    <section className={`${style.sectionWrapper} container`}>
      <div className={style.titleWrapper}>
        <h2 className={style.progressTitle}>
          Підтримай наших героїв - разом для перемоги!
        </h2>
      </div>
      <ul className={style.progressInfoWrapper}>
        <li className={style.progressBalanceWrapper}>
          <p className={style.desc}>Зібрано</p>
          <p className={style.descBalance}>{balance} грн</p>
        </li>
        <li className={style.progressBalanceWrapper}>
          <p className={style.desc}>Ціль збору</p>
          <p className={style.descBalance}>300 000 грн</p>
        </li>
      </ul>
      <div className={style.progressWrapper}>
        <div className={style.progressBar} style={{ width: width }}></div>
      </div>
    </section>
  );
};

export default Progress;
