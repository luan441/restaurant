import menu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHome from 'assets/our_home.png';

export default function Home() {
  const recommendedPlates = [...menu].sort(() => 0.5 - Math.random()).splice(0,3);
  return (
    <section>
      <h3 className={stylesTheme.title}>
        Recomendações da cozinha
      </h3>
      <div className={styles.recommendations}>
        {recommendedPlates.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>Nossa casa</h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Casa do restaurante" />
        <div className={styles.ourHome__address}>
          Rua Lorem Ipsum, 1234 <br /><br /> Dolor Sit - SP
        </div>
      </div>
    </section>
  );
}
