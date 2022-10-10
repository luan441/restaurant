import styles from './Item.module.scss';
import { Plate } from 'types/Plate';
import PlateTags from 'components/PlateTags';

export default function Item(props: Plate) {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={props.photo} alt={ props.title } />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{ props.title }</h2>
          <p>{ props.description }</p>
        </div>
        <PlateTags plate={props} />
      </div>
    </div>
  );
}
