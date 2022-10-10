import styles from './Plate.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import menu from 'data/menu.json';
import PlateTags from 'components/PlateTags';
import NotFound from 'pages/NotFound';
import StandardPage from 'components/StandardPage';

export default function Plate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plate = menu.find((item) => item.id === Number(id));

  if (!plate) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path='*' element={<StandardPage />}>
        <Route index element={
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
                <PlateTags plate={plate} />
              </div>
            </section>
          </>
        } />
      </Route>
    </Routes>
  );
}
