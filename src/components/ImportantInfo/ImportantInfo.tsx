import soldierImages from '../../assets/images/importantInfoSection/imageImports';
import styles from './ImportantInfo.module.scss';

const ImportantInfo = () => {
  return (
    <section className={styles.container} id='how-it-works'>
      <h2 className={styles.mainInfoTitle}>ЗБІР</h2>
      <h3 className={styles.infoTitle}>Чому це важливо ?</h3>
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

        <div>
          <p className={styles.descInfo}>
            Сучасні війни ведуться не тільки на полі бою, але й в електронному
            просторі, де перевага в інформації може вирішити долю битви.
            Радіоелектронна боротьба (РЕБ) дозволяє придушити ворожі комунікації
            та засоби навігації, що значно послаблює противника. Забезпечення
            наших військових РЕБ системами підвищить їхню безпеку та
            ефективність під час операцій. Кожен внесок на техніку РЕБ допомагає
            захистити життя наших солдатів і наблизити перемогу.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImportantInfo;
