import styles from './Plate.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import menu from 'data/menu.json';

export default function Plate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plate = menu.find((item) => item.id === Number(id));

  if(!plate) {
    return '';
  }

  return (
    <>
      <button
        className={styles.back}
        onClick={() => navigate(-1)}
      >
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>
          {plate.title}
        </h1>
        <div className={styles.image}>
          <img src={plate.photo} alt={plate.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>
            {plate.description}
          </p>
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
        </div>
      </section>
    </>
  );
}
