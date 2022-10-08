import styles from './Item.module.scss';
import itens from '../itens.json';
import classNames from 'classnames';

type Props = typeof itens[0];

export default function Item(props: Props) {
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
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__type]: true,
            [styles[`item__type__${props.category.label.toLowerCase()}`]]: true,
          })}>
            { props.category.label }
          </div>
          <div className={styles.item__portion}>
            { props.size }g
          </div>
          <div className={styles.item__qtdpeople}>
            Serve { props.serving } pessoa{ props.serving === 1 ? '' : 's' }
          </div>
          <div className={styles.item__price}>
            R$ { props.price.toFixed(2) }
          </div>
        </div>
      </div>
    </div>
  );
}