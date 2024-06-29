import { FC } from 'react';
import soldierImages from '../../assets/images/importantInfoSection/imageImports';
import styles from './ImportantInfo.module.scss';

const ImportantInfo: FC = () => {
  return (
    <section className={`${styles.sectionWrapper} container`} id="collection">
      <h2 className={styles.mainInfoTitle}>ЗБІР</h2>
      <p className={styles.infoTitle}>Чому це важливо ?</p>
      <div className={styles.infoWrapper}>
        <picture>
          <source
            media="(min-width: 768px)"
            type="image/webp"
            srcSet={`${soldierImages.desktop.webp.src} 1x, ${soldierImages.desktop.webp.src2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            type="image/png"
            srcSet={`${soldierImages.desktop.png.src} 1x, ${soldierImages.desktop.png.src2x} 2x`}
          />
          <source
            media="(min-width: 320px)"
            type="image/webp"
            srcSet={`${soldierImages.mobile.webp.src} 1x, ${soldierImages.mobile.webp.src2x} 2x`}
          />
          <source
            media="(min-width: 320px)"
            type="image/png"
            srcSet={`${soldierImages.mobile.png.src} 1x, ${soldierImages.mobile.png.src2x} 2x`}
          />
          <img
            className={styles.imgWrapper}
            src={soldierImages.mobile.png.src}
            alt="soldier"
          />
        </picture>

        <div className={styles.textWrapper}>
          <p className={styles.descInfo}>
            Сучасні війни ведуться не тільки на полі бою, але й в електронному
            просторі, де перевага в інформації може вирішити долю битви.
            Радіоелектронна боротьба (РЕБ) дозволяє придушити ворожі комунікації
            та засоби навігації, що значно послаблює противника.
          </p>
          <p className={styles.descInfo}>
            Забезпечення наших військових РЕБ системами підвищить їхню безпеку
            та ефективність під час операцій. Кожен внесок на техніку РЕБ
            допомагає захистити життя наших солдатів і наблизити перемогу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImportantInfo;
