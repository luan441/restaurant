import classNames from 'classnames';
import { Plate } from 'types/Plate';
import styles from './PlateTags.module.scss';

export default function PlateTags({ plate }: { plate: Plate}) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__type]: true,
        [styles[`tags__type__${plate.category.label.toLowerCase()}`]]: true
      })}>
        {plate.category.label}
      </div>
      <div className={styles.tags__portion}>
        { plate.size }g
      </div>
      <div className={styles.tags__qtdpeople}>
              Serve { plate.serving } pessoa{ plate.serving === 1 ? '' : 's' }
      </div>
      <div className={styles.tags__price}>
              R$ { plate.price.toFixed(2) }
      </div>
    </div>
  );
}
